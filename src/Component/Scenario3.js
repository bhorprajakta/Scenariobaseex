import React, { useRef, useLayoutEffect } from 'react';
import * as d3 from 'd3';

export default function SimpleChart() {
  const ref = useRef();

  useLayoutEffect(() => {
    const svg = d3.select(ref.current)
      .attr('width', 200)
      .attr('height', 100);

    svg.selectAll('circle')
      .data([10, 30, 50])
      .join('circle')
      .attr('cx', d => d * 2)
      .attr('cy', 50)
      .attr('r', 10)
      .attr('fill', 'steelblue');
  }, []);

  return <svg ref={ref} />;
}
