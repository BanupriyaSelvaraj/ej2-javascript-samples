this.default = function () {
    var data = new ej.base.extend([], window.scheduleData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        height: '650px',
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: data },
        dragStart: function (args) {
            args.navigation.enable = true;
        }
    });
    scheduleObj.appendTo('#Schedule');
    var currentDate = new ej.calendars.DatePicker({
        value: new Date(2018, 1, 15),
        showClearButton: false,
        change: function (args) {
            scheduleObj.selectedDate = args.value;
            scheduleObj.dataBind();
        }
    });
    currentDate.appendTo('#scheduledate');
};