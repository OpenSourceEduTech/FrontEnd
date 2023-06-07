import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import { useLayoutEffect } from "react";
import * as am5hierarchy from "@amcharts/amcharts5/hierarchy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import styled from "styled-components";
import { useEffect } from "react";

function MindMap() {
  useLayoutEffect(() => {
    var root = am5.Root.new("chartdiv");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([am5themes_Animated.new(root)]);

    var data = {
      value: 0,
      children: [
        {
          name: "과제 1",
          children: [
            {
              name: "소과제",
              children: [
                {
                  name: "질문 1",
                  value: 1,
                },
                {
                  name: "질문 2",
                  value: 1,
                },
                {
                  name: "Jasmine",
                  value: 1,
                },
              ],
            },
            {
              name: "소과제2",
              children: [
                {
                  name: "질문 1",
                  value: 1,
                },
                {
                  name: "질문 2",
                  value: 1,
                },
                {
                  name: "Jasmine",
                  value: 1,
                },
              ],
            },
          ],
        },
      ],
    };

    var container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
    var series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 2,
        topDepth: 1,
        initialDepth: 1,
        valueField: "value",
        categoryField: "name",
        childDataField: "children",
        idField: "name",
        linkWithField: "linkWith",
        manyBodyStrength: -10,
        centerStrength: 0.8,
      })
    );

    series.get("colors").setAll({
      step: 2,
    });

    series.links.template.set("strength", 0.5);

    series.data.setAll([data]);

    series.set("selectedDataItem", series.dataItems[0]);

    // Make stuff animate on load
    series.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdiv" style={{ width: "1200px", height: "800px" }}></div>;
}
export default MindMap;
