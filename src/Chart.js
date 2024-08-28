import { 
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LineChart,
    Line
  } from "recharts"; //Aqui é onde importei as componentes que formam o grafico
  
  export default function Chart({ data }) { //Onde o grafico e criado
    return (
        <LineChart data={data} width={500} height={500}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
      />
        </LineChart>
    );
  }