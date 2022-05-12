$(document).ready(function () {
  $.ajax({
    url: "https://restcountries.com/v3.1/all",
    type: "GET",
    dataType: "json",
    success: function (datas) {
      datas.forEach((element) => {
        const countrySelect = element.name.common;
        $("#country").append(
          `<option value="${element.name.common}">${countrySelect}</option>`
        );
      });
    },
  });
});

$(document).ready(function () {
  $(function () {
    $("#country").change(function () {
      var display = $("#country option:selected").text();
      $.ajax({
        url: `https://restcountries.com/v3.1/name/${display}`,
        type: "GET",
        dataType: "json",
        success: function (datas) {
          datas.forEach((element) => {
            const currValue = Object.values(element.currencies);
            const lang = element.languages;
            const SpecificLanguage = Object.values(lang).map((item) => {
              return " " + item;
            });

            $("#common").text(`Common name: ${element.name.common}`);
            $("#official").text(`Official name: ${element.name.official}`);
            $("#currencies").text(`Currency name: ${currValue[0].name}`);
            $("#symbol").text(`Currency symbol: ${currValue[0].symbol}`);
            $("#flag")
              .attr(`src`, `${element.flags.png}`)
              .width("100px")
              .height("50px");
            $("#maps")
              .attr({
                href: element.maps.googleMaps,
                target: "_blank",
              })
              .text("Google Maps");
            $("#Subregion").text(`Country Subregion: ${element.subregion}`);
            $("#Region").text(`Country  Region: ${element.region}`);
            $("#Population").text(`Country  Population: ${element.population}`);
            $("#symbol").text(`Currency symbol: ${currValue[0].symbol}`);
            $("#Languages").text(`Currency Languages: ${SpecificLanguage}`);
          });
        },
      });
    });
  });
});
