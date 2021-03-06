
$(function() {

  $("#yoga-form").submit(function(e) {
    e.preventDefault();
  });

  var contents = {"duration":10, "muscle":[]};
// when the user clicks submit...
  $("#submission").click(function() {
// Add the selected time into the contents object
    // contents.muscle = []---- Moved this to line 98

    contents.duration = $("#select").val();
    $("#summaryTable tr").remove();
    $("#confirm").remove();

    console.log(contents);
// Generate the workout options and duration for each
    var poseTime = contents.duration / contents.muscle.length;
// Convert minutes to mm:ss format
    var poseMinutes = Math.floor(poseTime);
    var poseSeconds = (poseTime * 60) % 60;
// Add leading zero if length is 1
    if (poseMinutes.toString().length === 1) {
      poseMinutes = '0' + poseMinutes;
    }
    if (poseSeconds.toString().length === 1) {
      poseSeconds = '0' + poseSeconds;
    }

    var totalPoseTime = poseMinutes + ":" + poseSeconds;
    console.log(poseMinutes, poseSeconds);

    var selection = {time:poseTime, pose:[]}

    for (var i = 0; i < contents.muscle.length; i++) {
// Generate random pose assigner
      var muscle = contents.muscle[i];
      var muscleArrayLength = poses[muscle].length
      var selector = Math.floor(Math.random() * muscleArrayLength)
      selection.pose.push(poses[muscle][selector]);
    }

    console.log(selection);

    // var tableMinutes = Math.floor(selection.time / 60)
    // var tableSeconds = (selection.time * 60) % 60

// Populate table with summary info
    for (var i = -1; i < selection.pose.length; i++) {
      if (i === -1) {
        $("#summaryTable").append("<thead><tr><th>Duration</th><th>Body Type</th><th>Pose</th></tr></thead>");
      } else {
        $("#summaryTable").append("<tbody><tr><td>" + totalPoseTime + "</td><td>" + contents.muscle[i] + "</td><td>" + selection.pose[i] + "</td></tr></tbody>");

      }
    }
// Generate Acceptance Button
    $("#result").append("<button type='submit' class='btn btn-primary' id='confirm'>Begin Workout</button>");
// Run on Confirm click
    $("#confirm").click(function() {
      $("#topDiv").empty();
      $("#topDiv").hide();
      $('#reload').show();
      $('#play').show();
      $('#mute').show();
      $("#reload").click(function() {
        location.reload();
      });

      function displayTime(totalSeconds) {
        $("#time").empty();

        var minutes = Math.floor(totalSeconds / 60);
        var seconds = totalSeconds % 60;

        if (seconds < 10) {
          seconds = '0' + seconds;
        }

        $("#time").append(minutes + ":" + seconds);
        totalSeconds--;

        if (totalSeconds > 0) {
          setTimeout(function() {
            $("#time").empty();
            displayTime(totalSeconds);
          }, 1000);
        }
      }

// Display Poses on given interval
      function displayPoses(time, pose) {
        var move = pose.pop();
        var totalSeconds = time * 60;

        console.log(links[move]);

        $("#poses").append("<img class='img-responsive center-block' src='" + links[move] + "'></img>");
        $("#move").append(move);

        displayTime(totalSeconds);

        if (pose.length) {
          setTimeout(function() {
            $("#poses").empty();
            $("#move").empty();
            displayPoses(time, pose);
          }, time * 60000);
        }
      }

      displayPoses(selection.time, selection.pose);

    });
    // contents.muscle = []
  });

  $("#addButton1").click(function(){
    // Add / Remove button functionality
    var currentText = $("#addButton1").html()
      if (currentText === "Add") {
        $("#addButton1").html("Remove")
        contents.muscle.push($("#addButton1").attr('value'))
        $("#addButton1").css('background-color', 'red')
      } else {
        $("#addButton1").html("Add")
        $("#addButton1").css('background-color', 'green')
        var index = contents.muscle.indexOf($("#addButton1").attr('value'));
        contents.muscle.splice(index, 1);
      }

    console.log(contents.muscle);
  });

  $("#addButton2").click(function(){
    var currentText = $("#addButton2").html()
      if (currentText === "Add") {
        $("#addButton2").html("Remove")
        contents.muscle.push($("#addButton2").attr('value'))
        $("#addButton2").css('background-color', 'red')
      } else {
        $("#addButton2").html("Add")
        $("#addButton2").css('background-color', 'green')
        var index = contents.muscle.indexOf($("#addButton1").attr('value'));
        contents.muscle.splice(index, 1);
      }
    console.log(contents.muscle);
  });

  $("#addButton3").click(function(){
    var currentText = $("#addButton3").html()
      if (currentText === "Add") {
        $("#addButton3").html("Remove")
        contents.muscle.push($("#addButton3").attr('value'))
        $("#addButton3").css('background-color', 'red')
      } else {
        $("#addButton3").html("Add")
        $("#addButton3").css('background-color', 'green')
        var index = contents.muscle.indexOf($("#addButton1").attr('value'));
        contents.muscle.splice(index, 1);
      }
    console.log(contents.muscle);
  });

  $("#addButton4").click(function(){
    var currentText = $("#addButton4").html()
      if (currentText === "Add") {
        $("#addButton4").html("Remove")
        contents.muscle.push($("#addButton4").attr('value'))
        $("#addButton4").css('background-color', 'red')
      } else {
        $("#addButton4").html("Add")
        $("#addButton4").css('background-color', 'green')
        var index = contents.muscle.indexOf($("#addButton1").attr('value'));
        contents.muscle.splice(index, 1);
      }
    console.log(contents.muscle);
  });

  $("#addButton5").click(function(){
    var currentText = $("#addButton5").html()
      if (currentText === "Add") {
        $("#addButton5").html("Remove")
        contents.muscle.push($("#addButton5").attr('value'))
        $("#addButton5").css('background-color', 'red')
      } else {
        $("#addButton5").html("Add")
        $("#addButton5").css('background-color', 'green')
        var index = contents.muscle.indexOf($("#addButton1").attr('value'));
        contents.muscle.splice(index, 1);
      }
    console.log(contents.muscle);
  });

  $("#addButton6").click(function(){
    var currentText = $("#addButton6").html()
      if (currentText === "Add") {
        $("#addButton6").html("Remove")
        contents.muscle.push($("#addButton6").attr('value'))
        $("#addButton6").css('background-color', 'red')
      } else {
        $("#addButton6").html("Add")
        $("#addButton6").css('background-color', 'green')
        var index = contents.muscle.indexOf($("#addButton1").attr('value'));
        contents.muscle.splice(index, 1);
      }
    console.log(contents.muscle);
  });
});
