var getColorsBase = [];
var getColors = [];

var getReasoning = [];
var getReasoning1 = [];
var getReasoning2 = [];

var getAssociations = [];
var getAssociations1 = [];
var getAssociations2 = [];
$.getJSON("files/Reasoning_Data.json", function (data) {
  getReasoning = data;
});
$.getJSON("files/Color_Data.json", function (data) {
  getColorsBase = data;
  getColors = data;
});
$.getJSON("files/Association_Data.json", function (data) {
  getAssociations = data;
});
function handleChange() {
  $.getJSON("files/Reasoning_Data.json", function (data) {
    getReasoning = data;
  });
  $.getJSON("files/Color_Data.json", function (data) {
    getColorsBase = data;
    getColors = data;
  });

  $.getJSON("files/Color_Data.json", function (data) {
    getColors = data;
  });
  $.getJSON("files/Association_Data.json", function (data) {
    getAssociations = data;
  });

  const efficacy = $("#SelectEfficacy").val();
  const ethnicity = $("#SelectEthnicity").val();
  const age = $("#SelectAge").val();
  const location = $("#SelectLocation").val();
  const gender = $("#SelectGender").val();
  const pillUsageFrequency = $("#SelectPillUsageFrequency").val();
  const educationLevel = $("#SelectEducationLevel").val();

  $("#resetForm").show();

  if (getColors.length > 0) {
    $("#recommendedColorRGP").show();
    if (ethnicity != "") {
      getColors = getColors.filter((fields) => fields.ethnicity === ethnicity);
      getReasoning = getReasoning.filter(
        (fields) => fields.ethnicity === ethnicity
      );
      getAssociations = getAssociations.filter(
        (fields) => fields.ethnicity === ethnicity
      );
    }

    if (age != "") {
      getReasoning = getReasoning.filter((fields) => fields.age === age);
      getColors = getColors.filter((fields) => fields.age === age);
      getAssociations = getAssociations.filter((fields) => fields.age === age);
    }

    if (efficacy != "") {
      getReasoning = getReasoning.filter(
        (fields) => fields.Efficacy === efficacy
      );
      getColors = getColors.filter((fields) => fields.efficacy === efficacy);
    }

    if (location != "") {
      getReasoning = getReasoning.filter(
        (fields) => fields.Location === location
      );
      getColors = getColors.filter((fields) => fields.location === location);
      getAssociations = getAssociations.filter(
        (fields) => fields.Location === location
      );
    }

    if (gender != "") {
      getReasoning = getReasoning.filter((fields) => fields.gender === gender);
      getColors = getColors.filter((fields) => fields.gender === gender);
      getAssociations = getAssociations.filter(
        (fields) => fields.gender === gender
      );
    }

    if (pillUsageFrequency != "") {
      getReasoning = getReasoning.filter(
        (fields) => fields.pillFrequency === pillUsageFrequency
      );
      getColors = getColors.filter(
        (fields) => fields.pillfrequency === pillUsageFrequency
      );
      getAssociations = getAssociations.filter(
        (fields) => fields.pillFrequency === pillUsageFrequency
      );
    }

    if (educationLevel != "") {
      getReasoning = getReasoning.filter(
        (fields) => fields.education === educationLevel
      );
      getColors = getColors.filter(
        (fields) => fields.education === educationLevel
      );
      getAssociations = getAssociations.filter(
        (fields) => fields.education === educationLevel
      );
    }

    {
    }
  }

  //  const g = d3.count(getColors, d =>  d.color === ""  )

  $("select").prop("disabled", false);
  function getMax(data, n) {
    var tmp = {},
      tops = [];

    // Create object with count of occurances of each array element
    data.forEach(function (item) {
      tmp[item] = tmp[item] ? tmp[item] + 1 : 1;
    });

    // Create an array of the sorted object properties
    tops = Object.keys(tmp).sort(function (a, b) {
      return tmp[a] - tmp[b];
    });

    // Return last n elements in reverse order
    return tops.slice(-n).reverse();
  }

  const topColors = getMax(
    getColors.map((c) => c.color),
    getColors.length
  );

  //            if (topColors[0] != "") {
  //             getReasoning = getReasoning.filter(fields=> fields.Color === topColors[0])
  //           //  getAssociations = getAssociations.filter(fields=> fields.Color === topColors[0] )

  // }

  if (topColors) {
    getReasoning1 = getReasoning.filter(
      (fields) => fields.Color === topColors[0]
    );

    getAssociations1 = getAssociations.filter(
      (fields) => fields.Color === topColors[0]
    );
  }

  const topReasoning = getMax(
    getReasoning1.map((r) => r.Reason),
    getReasoning.length
  );

  const topColorAssociation = getMax(
    getAssociations1.map((r) => r.Association),
    getAssociations.length
  );

  // var ttt = [];
  // getColors.filter((g) => (g.efficacy === "Antacid" ? ttt.push(g) : false));
  // getReasoning.filter((g) =>
  //   g.Efficacy === "antacid" ? ttt.push(g) : false
  // );
  // getAssociations.filter((g) =>
  //   g.Color === topColors[0] ? ttt.push(g) : false
  // );

  var color_p1 = [];
  var color_p2 = [];

  var color_association_1 = [];
  var color_association_2 = [];
  var color_association_3 = [];
  var color_association2_1 = [];
  var color_association2_2 = [];
  var color_association2_3 = [];

  var reasoning_p1 = [];
  var reasoning_p2 = [];
  var reasoning_p3 = [];

  var reasoning2_p1 = [];
  var reasoning2_p2 = [];
  var reasoning2_p3 = [];

  //Get Colors
  getColors.map((c) => {
    c.color === topColors[0] ? color_p1.push(c.color) : false;
  });
  getColors.map((c) => {
    c.color === topColors[1] ? color_p2.push(c.color) : false;
  });

  //Get Reasoning
  getReasoning1.map((r) => {
    r.Reason === topReasoning[0] ? reasoning_p1.push(r.Reason) : false;
  });
  getReasoning1.map((r) => {
    r.Reason === topReasoning[1] ? reasoning_p2.push(r.Reason) : false;
  });
  getReasoning1.map((r) => {
    r.Reason === topReasoning[2] ? reasoning_p3.push(r.Reason) : false;
  });

  //Get Assoc
  getAssociations1.map((r) => {
    r.Association === topColorAssociation[0] && r.Color === topColors[0]
      ? color_association_1.push(r.Association)
      : false;
  });

  getAssociations1.map((r) => {
    r.Association === topColorAssociation[1] && r.Color === topColors[0]
      ? color_association_2.push(r.Association)
      : false;
  });

  getAssociations1.map((r) => {
    r.Association === topColorAssociation[2] && r.Color === topColors[0]
      ? color_association_3.push(r.Association)
      : false;
  });

  const calculatePer = (total, number) => {
    return (total * 100) / number;
  };

  $("#resetForm").click(function (e) {
    e.preventDefault();
    $("#resetForm").hide();
    $("#totalTop2Colors").html("");
    $("#totalReasoning").html("");
    $("#total_color_association").html("");

    $("#SelectEfficacy").val("");

    $("#SelectEthnicity").val("");
    $("#SelectEthnicity").prop("disabled", true);
    $("#SelectEducationLevel").val("");
    $("#SelectEducationLevel").prop("disabled", true);
    $("#SelectLocation").val("");
    $("#SelectLocation").prop("disabled", true);
    $("#SelectAge").val("");
    $("#SelectAge").prop("disabled", true);
    $("#SelectPillUsageFrequency").val("");
    $("#SelectPillUsageFrequency").prop("disabled", true);
    $("#SelectGender").val("");
    $("#SelectGender").prop("disabled", true);
    $("#recommendedColorRGP").hide();
    $("#recommendedColor2RGP").hide();
    $("#topColorBar").hide();
    $("#topReasoning").hide();
    $("#topColorAsooBar").hide();
  });

  $("#recommendedColorRGP").css(
    "background-color",
    topColors.length <= 0 ? "#f7f7f7" : topColors[0]
  );

  $("#recommendedColorRGP").css("border-color", "black");
  $("#recommendedColor").text(topColors.length <= 0 ? "None" : topColors[0]);
  $("#recommended2Color").text(topColors.length <= 0 ? "None" : topColors[1]);

  $("#topColor1").text(topColors.length <= 0 ? "None" : topColors[0]);

  $("#topColor2").text(topColors.length <= 0 ? "None" : topColors[1]);

  $(".colorP1").text(
    topColors.length <= 0
      ? ""
      : Math.round(calculatePer(color_p1.length, getColors.length)).toString() +
          "%"
  );

  //Percentage color 2
  $(".colorP2").text(
    topColors.length <= 0
      ? ""
      : Math.round(calculatePer(color_p2.length, getColors.length)).toString() +
          "%"
  );

  if ($(".colorP1").text() === "100%") {
    $(".colorP1").text("");
  }

  //Reasoning Text

  $(".reasoning_1").text(topReasoning.length <= 0 ? "None" : topReasoning[0]);

  // Reasoning 2
  $(".reasoning_2").text(topReasoning.length <= 0 ? "" : topReasoning[1]);

  // Reasoning 3
  $(".reasoning_3").text(topReasoning.length <= 0 ? "" : topReasoning[2]);

  //Percentage Association
  $(".assoc_p1").text(
    topColorAssociation.length <= 0
      ? ""
      : Math.round(
          calculatePer(color_association_1.length, getAssociations1.length)
        ).toString() + "%"
  );

  $(".assoc_p2").text(
    topColorAssociation.length <= 0
      ? ""
      : Math.round(
          calculatePer(color_association_2.length, getAssociations1.length)
        ).toString() + "%"
  );

  $(".assoc_p3").text(
    topColorAssociation.length <= 0
      ? ""
      : Math.round(
          calculatePer(color_association_3.length, getAssociations1.length)
        ).toString() + "%"
  );

  //Association Text

  $(".assoc_1").text(
    topColorAssociation.length <= 0 ? "None" : topColorAssociation[0]
  );

  $(".assoc_2").text(
    topColorAssociation.length <= 0 ? "" : topColorAssociation[1]
  );

  $(".assoc_3").text(
    topColorAssociation.length <= 0 ? "" : topColorAssociation[2]
  );

  if (color_p1.length === 0) {
    $("#topColorBar").hide();
  } else {
    $("#topColorBar").show();
  }

  if (reasoning_p1.length === 0) {
    $("#topReasoning").hide();
  } else {
    $("#topReasoning").show();
  }

  if (color_association_1.length === 0) {
    $("#topColorAsooBar").hide();
  } else {
    $("#topColorAsooBar").show();
  }

  if (
    topColors[0] === "Black" ||
    topColors[0] === "Blue" ||
    topColors[0] === "Red" ||
    topColors[0] === "Green"
  ) {
    $("#recommendedColor").css("color", "#fff");
  } else {
    $("#recommendedColor").css("color", "#000");
  }

  if (
    Math.round(calculatePer(color_p1.length, getColors.length)) !=
    Math.round(calculatePer(color_p2.length, getColors.length))
  ) {
    $("#recommendedColor2RGP").hide();

    var ReasonongDataSets = [];

    if (
      Math.round(calculatePer(reasoning_p1.length, getReasoning1.length)) ===
      100
    ) {
      ReasonongDataSets = [
        {
          label: reasoning_p1[0],
          data: [
            Math.round(calculatePer(reasoning_p1.length, getReasoning1.length)),
          ],
          backgroundColor: "#fff",
        },
      ];
    } else {
      if (reasoning_p1[0] != undefined) {
        ReasonongDataSets.push({
          label: reasoning_p1[0],
          data: [
            Math.round(calculatePer(reasoning_p1.length, getReasoning1.length)),
          ],
          backgroundColor: "#fff",
        });
      }

      if (reasoning_p2[0] != undefined) {
        ReasonongDataSets.push({
          label: reasoning_p2[0],
          data: [
            Math.round(calculatePer(reasoning_p2.length, getReasoning1.length)),
          ],
          backgroundColor: "#FBB13C",
        });
      }

      if (reasoning_p3[0] != undefined) {
        ReasonongDataSets.push({
          label: reasoning_p3[0],
          data: [
            Math.round(calculatePer(reasoning_p3.length, getReasoning1.length)),
          ],
          backgroundColor: "#3DA5D9",
        });
      }
    }

    var topReasoningChart = new Chart("topReasoning", {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: [topColors[0]],
        datasets: ReasonongDataSets,
      },

      options: {
        events: [],
        plugins: {
          datalabels: {
            formatter: function (value, ctx) {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              if (value != 0) {
                let percentage = value + "%";

                return percentage;
              }
            },
          },
        },
        tooltips: { enabled: false },
        hover: { mode: null },
        legend: {
          verticalAlign: "center",
          horizontalAlign: "right",
          reverse: true,

          position: "right", // place legend on the right side of chart
        },
        scales: {
          xAxes: [
            {
              barThickness: 100,
              stacked: true, // this should be set to make the bars stacked
            },
          ],
          yAxes: [
            {
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true, // minimum value will be 0.
              },
              stacked: true,
              display: false,
              //type: 'logarithmic',
              scaleLabel: {
                display: false,
              },
            },
          ],
        },
        //causes chart to resize when its container resizes
        responsive: true,
        //setting to false will prevent the height of the chart from shrinking when resizing
        maintainAspectRatio: false,
      },
    });
    //   $("#topColorAsooBar").empty();
    //   $("#topColorAsooBar").html(
    //     '<canvas id="topColorAsooBar" style="width:100%;max-width:300px; align-items: center; "></canvas>'
    //   );

    //   document.getElementById("topColorAsooBar").innerHTML = "&nbsp;";
    //   document.getElementById("topColorAsooBar").innerHTML =
    //     '<canvas id="topColorAsooBar"></canvas>';

    //   $("#topColorAsooBar").hover(() => true);
    var topColorAssocChartDataSet = [];
    if (
      Math.round(
        calculatePer(color_association_1.length, getAssociations1.length)
      ) +
        Math.round(
          calculatePer(color_association_2.length, getAssociations1.length)
        ) ===
      100
    ) {
      topColorAssocChartDataSet = [
        {
          label: color_association_1[0],
          data: [
            Math.round(
              calculatePer(color_association_1.length, getAssociations1.length)
            ),
          ],
          backgroundColor: "#fff",
        },
        {
          label: color_association_2[0],
          data: [
            Math.round(
              calculatePer(color_association_2.length, getAssociations1.length)
            ),
          ],
          backgroundColor: "#FBB13C",
        },
      ];
    } else if (
      Math.round(
        calculatePer(color_association_1.length, getAssociations1.length)
      ) === 100
    ) {
      topColorAssocChartDataSet = [
        {
          label: color_association_1[0],
          data: [
            Math.round(
              calculatePer(color_association_1.length, getAssociations1.length)
            ),
          ],
          backgroundColor: "#fff",
        },
      ];
    } else {
      topColorAssocChartDataSet = [
        {
          label: color_association_1[0],
          data: [
            Math.round(
              calculatePer(color_association_1.length, getAssociations1.length)
            ),
          ],
          backgroundColor: "#fff",
        },
        {
          label: color_association_2[0],
          data: [
            Math.round(
              calculatePer(color_association_2.length, getAssociations1.length)
            ),
          ],
          backgroundColor: "#FBB13C",
        },
        {
          label: color_association_3[0],
          data: [
            Math.round(
              calculatePer(color_association_3.length, getAssociations1.length)
            ),
          ],
          backgroundColor: "#3DA5D9",
        },
      ];
    }

    var topColorAssocChart = new Chart("topColorAsooBar", {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset color_association2_1
      data: {
        labels: [topColors[0]],
        datasets: topColorAssocChartDataSet,
      },

      options: {
        events: [],
        plugins: {
          datalabels: {
            formatter: function (value, ctx) {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              if (value != 0) {
                let percentage = value + "%";

                return percentage;
              }
            },
          },
        },
        hover: { mode: null },
        tooltips: { enabled: false },
        legend: {
          align: "start",
          verticalAlign: "center",
          horizontalAlign: "right",
          reverse: true,
          position: "right", // place legend on the right side of chart
        },
        scales: {
          xAxes: [
            {
              horizontalAlign: "right",
              maxBarThickness: 100,
              barThickness: 100,

              stacked: true, // this should be set to make the bars stacked
            },
          ],
          yAxes: [
            {
              ticks: {
                maxHeight: 100,
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true, // minimum value will be 0.
              },
              stacked: true,
              display: false,
              //type: 'logarithmic',
              scaleLabel: {
                display: false,
              },
            },
          ],
        },
        //causes chart to resize when its container resizes
        responsive: true,
        //setting to false will prevent the height of the chart from shrinking when resizing
        maintainAspectRatio: false,
      },
    });
  } else {
    let labels;
    if (reasoning_p1[0] === undefined) {
      labels = [topColors[0]];
    } else {
      labels = [topColors[0], topColors[1]];
    }

    if (
      Math.round(calculatePer(reasoning_p1.length, getReasoning1.length)) ===
      100
    ) {
    }

    if (topColors[1] != undefined) {
      $("#recommendedColor2RGP").show();
      $("#recommendedColor2RGP").css("borderColor", "black");
      if (
        topColors[1] === "Black" ||
        topColors[1] === "Blue" ||
        topColors[1] === "Red" ||
        topColors[1] === "Green"
      ) {
        $("#recommended2Color").css("color", "#fff");
      } else {
        $("#recommended2Color").css("color", "#000");
      }
    }

    getReasoning2 = getReasoning.filter(
      (fields) => fields.Color === topColors[1]
    );
    const topReasoning2 = getMax(
      getReasoning2.map((r) => r.Reason),
      getReasoning2.length
    );
    getReasoning2.map((r) => {
      r.Reason === topReasoning[0] ? reasoning2_p1.push(r.Reason) : false;
    });
    getReasoning2.map((r) => {
      r.Reason === topReasoning[1] ? reasoning2_p2.push(r.Reason) : false;
    });
    getReasoning2.map((r) => {
      r.Reason === topReasoning[2] ? reasoning2_p3.push(r.Reason) : false;
    });

    getAssociations2 = getAssociations.filter(
      (fields) => fields.Color === topColors[1]
    );

    //Get Assoc
    getAssociations2.map((r) => {
      r.Association === topColorAssociation[0] && r.Color === topColors[1]
        ? color_association2_1.push(r.Association)
        : false;
    });

    getAssociations2.map((r) => {
      r.Association === topColorAssociation[1] && r.Color === topColors[1]
        ? color_association2_2.push(r.Association)
        : false;
    });

    getAssociations2.map((r) => {
      r.Association === topColorAssociation[2] && r.Color === topColors[1]
        ? color_association2_3.push(r.Association)
        : false;
    });

    $(".reasoning2_1").text(
      topReasoning2.length <= 0 ? "None" : topReasoning2[0]
    );

    // Reasoning 2
    $(".reasoning2_2").text(topReasoning2.length <= 0 ? "" : topReasoning2[1]);

    // Reasoning 3
    $(".reasoning2_3").text(topReasoning2.length <= 0 ? "" : topReasoning2[2]);

    //   if (
    //     Math.round(calculatePer(reasoning_p1.length, getReasoning1.length)) ===
    //     100
    //   ) {
    //     labels = [];
    //   }

    var TopReasoningDataSets = [];

    if (reasoning_p1[0] != undefined) {
      TopReasoningDataSets.push({
        label: reasoning_p1[0],
        data: [
          Math.round(calculatePer(reasoning_p1.length, getReasoning1.length)),
          0,
        ],
        backgroundColor: "#fff",
      });
    }

    if (reasoning_p2[0] != undefined) {
      TopReasoningDataSets.push({
        label: reasoning_p2[0],
        data: [
          Math.round(calculatePer(reasoning_p2.length, getReasoning1.length)),
          0,
        ],
        backgroundColor: "#FBB13C",
      });
    }

    if (reasoning_p3[0] != undefined) {
      TopReasoningDataSets.push({
        label: reasoning_p3[0],
        data: [
          Math.round(calculatePer(reasoning_p3.length, getReasoning1.length)),
          0,
        ],
        backgroundColor: "#3DA5D9",
      });
    }

    if (reasoning2_p1[0] != undefined) {
      TopReasoningDataSets.push({
        label: reasoning2_p1[0],
        data: [
          0,
          Math.round(calculatePer(reasoning2_p1.length, getReasoning2.length)),
        ],
        backgroundColor: "#fff",
      });
    }

    if (reasoning2_p2[0] != undefined) {
      TopReasoningDataSets.push({
        label: reasoning2_p2[0],
        data: [
          0,
          Math.round(calculatePer(reasoning2_p2.length, getReasoning2.length)),
        ],
        backgroundColor: "#FBB13C",
      });
    }

    if (reasoning2_p3[0] != undefined) {
      TopReasoningDataSets.push({
        label: reasoning2_p3[0],
        data: [
          0,
          Math.round(calculatePer(reasoning2_p3.length, getReasoning2.length)),
        ],
        backgroundColor: "#3DA5D9",
      });
    }

    var topReasoningChart2 = new Chart("topReasoning", {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset

      data: {
        labels: [topColors[0], topColors[1]],
        datasets: TopReasoningDataSets,
      },

      options: {
        events: [],
        plugins: {
          datalabels: {
            formatter: function (value, ctx) {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              if (value != 0) {
                let percentage = value + "%";

                return percentage;
              } else {
                return "";
              }
            },
          },
        },
        tooltips: { enabled: false },
        hover: { mode: null },
        legend: {
          labels: {
            filter: function (legendItem, chartData) {
              if (
                //   legendItem.datasetIndex === 0 |
                legendItem.datasetIndex === 1
              ) {
                return false;
              }
              return true;
            },
          },
          align: "start",
          reverse: true,
          position: "right", // place legend on the right side of chart
        },
        scales: {
          xAxes: [
            {
              maxBarThickness: 100,
              barThickness: 100,
              stacked: true, // this should be set to make the bars stacked
            },
          ],
          yAxes: [
            {
              stacked: true,
              display: false,
              //type: 'logarithmic',
              scaleLabel: {
                display: false,
              },
            },
          ],
        },
        //causes chart to resize when its container resizes
        responsive: true,
        //setting to false will prevent the height of the chart from shrinking when resizing
        maintainAspectRatio: false,
      },
    });

    var colorAssDataSet2 = [];

    if (color_association_1[0] != undefined) {
      colorAssDataSet2.push({
        label: color_association_1[0],
        data: [
          Math.round(
            calculatePer(color_association_1.length, getAssociations1.length)
          ),
          0,
        ],
        backgroundColor: "#fff",
      });
    }

    if (color_association_2[0] != undefined) {
      colorAssDataSet2.push({
        label: color_association_2[0],
        data: [
          Math.round(
            calculatePer(color_association_2.length, getAssociations1.length)
          ),
          0,
        ],
        backgroundColor: "#FBB13C",
      });
    }

    if (color_association_3[0] != undefined) {
      colorAssDataSet2.push({
        label: color_association_3[0],
        data: [
          Math.round(
            calculatePer(color_association_3.length, getAssociations1.length)
          ),
          0,
        ],
        backgroundColor: "#3DA5D9",
      });
    }

    if (color_association2_1[0] != undefined) {
      colorAssDataSet2.push({
        label: color_association2_1[0],
        data: [
          0,
          Math.round(
            calculatePer(color_association2_1.length, getAssociations2.length)
          ),
        ],
        backgroundColor: "#fff",
      });
    }

    if (color_association2_2[0] != undefined) {
      colorAssDataSet2.push({
        label: color_association2_2[0],
        data: [
          0,
          Math.round(
            calculatePer(color_association2_2.length, getAssociations2.length)
          ),
        ],
        backgroundColor: "#FBB13C",
      });
    }

    if (color_association2_3[0] != undefined) {
      colorAssDataSet2.push({
        label: color_association2_3[0],
        data: [
          0,
          Math.round(
            calculatePer(color_association2_3.length, getAssociations2.length)
          ),
        ],
        backgroundColor: "#3DA5D9",
      });
    }

    var topColorAssocChart2 = new Chart("topColorAsooBar", {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset color_association2_1
      data: {
        labels: [topColors[0], topColors[1]],
        datasets: colorAssDataSet2,
      },

      options: {
        events: [],
        plugins: {
          datalabels: {
            formatter: function (value, ctx) {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map((data) => {
                sum += data;
              });
              if (value != 0) {
                let percentage = value + "%";

                return percentage;
              } else {
                return "";
              }
            },
          },
        },
        hover: { mode: null },
        tooltips: { enabled: false },
        hover: { mode: null },
        legend: {
          labels: {
            filter: function (legendItem, chartData) {
              if (
                legendItem.datasetIndex === 0 ||
                legendItem.datasetIndex === 1
              ) {
                return false;
              }
              return true;
            },
          },
          align: "start",
          // reverse: true,
          position: "right", // place legend on the right side of chart
        },
        scales: {
          xAxes: [
            {
              barThickness: 100,
              maxBarThickness: 100,
              stacked: true, // this should be set to make the bars stacked
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: false,
              },
              stacked: true,
              display: false,
              //type: 'logarithmic',
              scaleLabel: {
                display: false,
              },
            },
          ],
        },
        //causes chart to resize when its container resizes
        responsive: true,
        //setting to false will prevent the height of the chart from shrinking when resizing
        maintainAspectRatio: false,
      },
    });
  }

  // var xValues = [topColors[0], topColors[1]]
  var xValues;

  if (calculatePer(color_p1.length, getColors.length) === 100) {
    xValues = [topColors[0]];
  } else {
    var xValues = [topColors[0], topColors[1]];
  }

  var yValues = [
    calculatePer(color_p1.length, getColors.length),
    calculatePer(color_p2.length, getColors.length),
  ];

  var barColors = [topColors[0], topColors[1]];

  new Chart("topColorBar", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },

    options: {
      scales: {
        xAxes: [
          {
            barThickness: 100,
            maxBarThickness: 100,
            stacked: true, // this should be set to make the bars stacked
          },
        ],
        yAxes: [
          {
            maxHeight: 0,
            stacked: true,
            display: false,
            //type: 'logarithmic',
            scaleLabel: {
              display: false,
            },
          },
        ],
      },
      events: [],
      tooltips: { enabled: false },
      plugins: {
        datalabels: {
          formatter: function (value, ctx) {
            let percentage = "";
            return percentage;
          },
        },
      },

      animation: {
        duration: 500,
        easing: "easeOutQuart",
        onComplete: function () {
          var ctx = this.chart.ctx;
          ctx.font = Chart.helpers.fontString(
            Chart.defaults.global.defaultFontFamily,
            "normal",
            Chart.defaults.global.defaultFontFamily
          );
          ctx.textAlign = "center";
          ctx.textBaseline = "bottom";

          this.data.datasets.forEach(function (dataset) {
            for (var i = 0; i < dataset.data.length; i++) {
              var model =
                  dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                scale_max =
                  dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale
                    .maxHeight;
              ctx.fillStyle = "#999999";
              var y_pos = model.y - 5;
              // Make sure data value does not get overflown and hidden
              // when the bar's value is too close to max value of scale
              // Note: The y value is reverse, it counts from top down
              if ((scale_max - model.y) / scale_max >= 0.93)
                y_pos = model.y + 20;
              ctx.fillText(
                parseInt(Math.round(dataset.data[i])) + "%",
                model.x,
                y_pos
              );
            }
          });
        },
      },
      responsive: true,
      legend: { display: false, reverse: true },
      title: {
        display: true,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              suggestedMin: 0, // minimum will be 0, unless there is a lower value.
              // OR //
              beginAtZero: true, // minimum value will be 0.
            },
            stack: false,
            display: false,
            //type: 'logarithmic',
            scaleLabel: {
              display: false,
            },
          },
        ],
      },
    },
  });

  $("#recommendedColor2RGP").css(
    "background-color",
    topColors.length <= 0 ? "#fff" : topColors[1]
  );
  // $("#recommended2Color").text(getColors.length);
  $("#totalTop2Colors").text(`n=(${getColors.length})`);
  $("#totalReasoning").text(`n=(${getReasoning1.length})`);

  $("#total_color_association").text(`n=(${getAssociations1.length})`);

  //  xValues.push(topColors[0], topColors[1])
  // barColors.push(topColors[0], topColors[1])
}
//      } else if($(".colorP1").text() != $(".colorP2").text()) {
//       xValues.push(topColors[0], )
// barColors.push(topColors[0])
//      } else if($(".colorP1").text() === "") {
//        $("#topColorBar").hide()
//      }

//    nv.addGraph(function() {

//         var chart = nv.models.discreteBarChart()
//             .x(function(d) { return d.label })
//             .y(function(d) { return d.value })

//             .showValues(true)
//             .duration(250);
//          chart.yAxis.tickFormat(d3.format(',0d'));
// chart.valueFormat(d3.format(',0d'));
//         d3.select('#topColorsChart svg')
//             .datum(data)
//             .call(chart);
//         nv.utils.windowResize(chart.update);
//         return chart;
//     });

function ScrollTo(to) {
  var windowsize = $(window).width();
  if (windowsize <= 991) {
    $("html, body").animate(
      {
        scrollTop: $(`#${to}`).offset().top - 270,
      },
      2000
    );
  } else {
    $("html, body").animate(
      {
        scrollTop: $(`#${to}`).offset().top,
      },
      2000
    );
  }
}
