
  document.addEventListener('DOMContentLoaded', function() {
    // sidenav init
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datpicker init
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    //select init
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
  });