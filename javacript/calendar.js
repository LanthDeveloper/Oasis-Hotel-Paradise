$(function () {
  $("#dateInput").daterangepicker(
      {
          linkedCalendars: false,
          autoUpdateInput: true,
          autoApply: true,
          showCustomRangeLabel: false,
          drops: "up",
      },
      function (start, end, label) {
          console.log("New date range selected: " + start.format("YYYY-MM-DD") + " to " + end.format("YYYY-MM-DD"));
      }
  );

  $(".input_date_group").on("click", function () {
      $("#dateInput").trigger("focus");
  });
});
