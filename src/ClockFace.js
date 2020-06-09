import React, { PureComponent } from 'react';
import { G, Text, Line } from 'react-native-svg';
import range from 'lodash.range';
import PropTypes from 'prop-types'; // ES6

export default class ClockFace extends PureComponent {
  static propTypes = {
    r: PropTypes.number,
    stroke: PropTypes.string,
  };

  render() {
    const { r, stroke } = this.props;
    const faceRadius = r - 5;
    const textRadius = r - 26;

    return (
      <G>
        {range(12).map((i) => {
          const cos = Math.cos(((2 * Math.PI) / 12) * i);
          const sin = Math.sin(((2 * Math.PI) / 12) * i);

          return (
            <Line
              key={i}
              stroke="#464a4c"
              strokeWidth={2}
              x1={cos * faceRadius}
              y1={sin * faceRadius}
              x2={cos * (faceRadius - 7)}
              y2={sin * (faceRadius - 7)}
            />
          );
        })}
        <G transform={{ translate: '0, -9' }}>
          {range(12).map((h, i) => (
            <Text
              key={i}
              fill={stroke}
              fontSize="16"
              textAnchor="middle"
              x={textRadius * Math.cos(((2 * Math.PI) / 12) * i - Math.PI / 2 + Math.PI / 6)}
              y={textRadius * Math.sin(((2 * Math.PI) / 12) * i - Math.PI / 2 + Math.PI / 6) + 15}
            >
              {h + 1}
            </Text>
          ))}
        </G>
      </G>
    );
  }
}
