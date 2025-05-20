const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/get_day_of_week_2025", (req, res) => {
  const { date } = req.body;

  if (!date) {
    return res.status(400).json({ error: "No se proporcionó una fecha" });
  }

  const inputDate = new Date(date);
  if (inputDate.getFullYear() !== 2025) {
    return res.status(400).json({ error: "Solo fechas del año 2025" });
  }

  const days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  const dayName = days[inputDate.getDay()];

  return res.json({ day_of_week: dayName });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
