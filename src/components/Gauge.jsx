//--------------------------------------------------------------------------------//
//                                                                                //
// Gauge.jsx                                                                    //
//                                                                                //
// This source code is made freely available for                                  //
// possible modification and redistribution.                                      //   
//                                                                                //
// If any question, send email to kcjin000@gmail.com                              //
//                                                                                //
//--------------------------------------------------------------------------------//

import { color }          from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import LiquidFillGauge    from 'react-liquid-gauge';

const Gauge = ({ radius = 200, value = 0.0, percent = 'PPM', ...props }) => {

    const startColor    = '#6495ed'; // cornflowerblue
    const endColor      = '#dc143c'; // crimson
    const u_value       = percent == "PPM" ? value*1.0 : value/1.8;
    const interpolate   = interpolateRgb(startColor, endColor);
    const fillColor     = interpolate(u_value / 100);
    
    const gradientStops = [
        {
            key: '0%',
            stopColor: color(fillColor).darker(0.5).toString(),
            stopOpacity: 1,
            offset: '0%'
        },
        {
            key: '50%',
            stopColor: fillColor,
            stopOpacity: 0.75,
            offset: '50%'
        },
        {
            key: '100%',
            stopColor: color(fillColor).brighter(0.5).toString(),
            stopOpacity: 0.5,
            offset: '100%'
        }
    ];

    return (
        <LiquidFillGauge
            {...props}
            width       = {radius * 2}
            height      = {radius * 2}
            value       = {percent == "PPM" ? parseFloat(value.toFixed(1)) : parseInt(value/1.8)}
            percent     = {percent}
            textSize    = {1}
            textOffsetX = {0}
            textOffsetY = {10}
            textRenderer={({ value, width, height, textSize, percent }) => {
                value = percent == "PPM" ? Math.round(value*10)/10.0 : Math.round(value*1.8*10)/10.0;
                const radius     = Math.min(height / 2, width / 2);
                const textPixels = (textSize * radius / 2);
                const valueStyle = {
                    fontSize: textPixels
                };
                const percentStyle = {
                    fontSize: textPixels * 0.25
                };

                return (
                    <tspan>
                        <tspan className="value" style={valueStyle}>{value.toFixed(1)}</tspan>
                        <tspan style={percentStyle}>{percent}</tspan>
                    </tspan>
                );
            }}
            riseAnimation
            waveAnimation
            waveFrequency={3}
            waveAmplitude={1}
            gradient
            gradientStops={gradientStops}
            circleStyle={{
                fill: fillColor
            }}
            waveStyle={{
                fill: fillColor
            }}
            textStyle={{
                fill: color('#444').toString(),
                fontFamily: 'Arial'
            }}
            waveTextStyle={{
                fill: color('#fff').toString(),
                fontFamily: 'Arial'
            }}
        />
    );
};

export default Gauge;
