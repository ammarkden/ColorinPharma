var g = [];

if (color_association_1[0] != "") {
  g.push({
    label: color_association_1[0],
    data: [
      Math.round(
        calculatePer(color_association_1.length, getAssociations1.length)
      ),
      0,
    ],
    backgroundColor: "#EFFDFD",
  });
}

if (color_association_2[0] != "") {
  g.push({
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

if (color_association_3[0] != "") {
  g.push({
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

if (color_association2_1[0] != "") {
  g.push({
    label: color_association2_1[0],
    data: [
      Math.round(
        calculatePer(color_association2_1.length, getAssociations2.length)
      ),
      0,
    ],
    backgroundColor: "#EFFDFD",
  });
}

if (color_association2_2[0] != "") {
  g.push({
    label: color_association2_2[0],
    data: [
      Math.round(
        calculatePer(color_association2_2.length, getAssociations2.length)
      ),
      0,
    ],
    backgroundColor: "#FBB13C",
  });
}

if (color_association3_2[0] != "") {
  g.push({
    label: color_association2_3[0],
    data: [
      Math.round(
        calculatePer(color_association2_3.length, getAssociations2.length)
      ),
      0,
    ],
    backgroundColor: "#3DA5D9",
  });
}
