import React, { useEffect } from 'react';
import * as d3 from 'd3';

const MindMap = () => {
  const data = {
    nodes: [
      { id: '주제', group: 0 },
      { id: '질문1', group: 1 },
      { id: '질문2', group: 1 },
      { id: '질문3', group: 1 },
      // 추가 노드...
    ],
    links: [
      { source: '주제', target: '질문1' },
      { source: '주제', target: '질문2' },
      { source: '주제', target: '질문3' },
      // 추가 링크...
    ],
  };

  useEffect(() => {
    const svg = d3.select('svg');
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const simulation = d3
      .forceSimulation()
      .force('link', d3.forceLink().id((d) => d.id))
      .force('charge', d3.forceManyBody())
      .force('center', d3.forceCenter(width / 2, height / 2));

    const link = svg
      .append('g')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.6)
      .selectAll('line')
      .data(data.links)
      .join('line')
      .attr('stroke-width', (d) => Math.sqrt(d.value));

    const node = svg
      .append('g')
      .attr('stroke', '#fff')
      .attr('stroke-width', 1.5)
      .selectAll('circle')
      .data(data.nodes)
      .join('circle')
      .attr('r', 20)
      .attr('fill', (d) => (d.group === 0 ? 'blue' : 'red'))
      .call(d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended));

    node.append('title').text((d) => d.id);

    simulation.nodes(data.nodes).on('tick', ticked);

    simulation.force('link').links(data.links);

    function ticked() {
      link
        .attr('x1', (d) => d.source.x)
        .attr('y1', (d) => d.source.y)
        .attr('x2', (d) => d.target.x)
        .attr('y2', (d) => d.target.y);

      node.attr('cx', (d) => d.x).attr('cy', (d) => d.y);
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    const zoom = d3.zoom().on('zoom', (event) => {
      svg.attr('transform', event.transform);
    });

    svg.call(zoom);
  }, []);

  return <svg width="800" height="600"></svg>;
};

export default MindMap;
