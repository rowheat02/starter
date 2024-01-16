import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export interface IChartProps {
  data: Record<string, any>[any];
  fills?: string[];
  scrollable?: boolean;
  width?: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip tw-relative tw-z-20 tw-rounded-xl tw-border-2 tw-bg-white tw-px-3 tw-py-2 tw-text-sm tw-text-primary-400">
        <p className="label tw-font-bold">{label}</p>
        {payload?.map((item: any) => {
          if (item.dataKey !== 'name')
            return (
              <div
                key={item.dataKey}
                className="tw-flex tw-w-fit tw-items-center tw-justify-between tw-gap-5"
              >
                <div className="tw-flex tw-items-center tw-justify-center tw-gap-1">
                  <div
                    className="tw-h-3 tw-w-3 tw-rounded-sm"
                    style={{ backgroundColor: `${item?.fill}` }}
                  />
                  <span>{item.dataKey}</span>
                </div>
                <p className="tw-font-semibold">{item.value}</p>
              </div>
            );
          return <></>;
        })}
      </div>
    );
  }

  return null;
};

export default function BarChartComponent({
  data,
  fills = [],
  scrollable = false,
  width = '150%',
}: IChartProps) {
  if (!data || data.length === 0) {
    return null;
  }

  const keys = Object.keys(data[0]);

  return (
    <ResponsiveContainer
      width={scrollable && width ? width : '100%'}
      minHeight={150}
      maxHeight={230}
    >
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} stroke="#DDD" />
        <XAxis
          dataKey="name"
          style={{
            fontSize: '13.4px',
            color: '#484848',
          }}
          tickLine={false}
        />
        <YAxis
          yAxisId="left"
          style={{
            fontSize: '12px',
            color: '#484848',
          }}
          tickLine={false}
        />

        <Tooltip content={<CustomTooltip />} />
        {keys.map((key, i) => (
          <Bar
            key={key}
            yAxisId="left"
            dataKey={key}
            fill={fills[i]}
            barSize={28}
            radius={[4, 4, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
