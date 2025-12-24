
import { Question } from './types';

export const QUESTIONS_DATA: Question[] = [
  {
    id: 1,
    question: "Define what a physical quantity is and name two components it must consist of.",
    solution: "A physical quantity is a quantity that can be measured. It consists of a magnitude (numerical value) and a unit.",
    topic: "Fundamental Concepts",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 2,
    question: "Which of the following is the SI unit for temperature? A) Celsius B) Fahrenheit C) Kelvin D) Joule",
    solution: "C) Kelvin",
    topic: "SI Units",
    difficulty: "Easy",
    type: "Multiple Choice"
  },
  {
    id: 3,
    question: "Convert 2.5 kilograms into grams.",
    solution: "2.5 kg = 2.5 × 1000 = 2500 grams.",
    topic: "Mass",
    difficulty: "Medium",
    type: "Calculation"
  },
  {
    id: 4,
    question: "What instrument would you use to measure the internal diameter of a small beaker accurately?",
    solution: "A metre rule can be used for general measurement, but for higher precision, Vernier callipers (or a ruler for Grade 7 level) is used.",
    topic: "Length",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 5,
    question: "Explain the 'parallax error' when reading a scale and how to avoid it.",
    solution: "Parallax error occurs when the eye is not placed vertically above the mark being read. To avoid it, always position your line of sight perpendicular to the scale.",
    topic: "Length",
    difficulty: "Medium",
    type: "Descriptive"
  },
  {
    id: 6,
    question: "Calculate the area of a rectangular garden that is 15m long and 8m wide.",
    solution: "Area = length × width = 15m × 8m = 120 m².",
    topic: "Area",
    difficulty: "Easy",
    type: "Calculation"
  },
  {
    id: 7,
    question: "A cube has a side length of 4 cm. Calculate its volume in cm³.",
    solution: "Volume = side × side × side = 4cm × 4cm × 4cm = 64 cm³.",
    topic: "Volume",
    difficulty: "Easy",
    type: "Calculation"
  },
  {
    id: 8,
    question: "Describe how to measure the volume of a small, irregularly shaped stone using a measuring cylinder.",
    solution: "1. Fill a measuring cylinder with a known volume of water (V1). 2. Submerge the stone completely in the water. 3. Record the new volume (V2). 4. The volume of the stone is V2 - V1.",
    topic: "Volume",
    difficulty: "Medium",
    type: "Descriptive"
  },
  {
    id: 9,
    question: "What is the SI unit for time? A) Minute B) Hour C) Second D) Millisecond",
    solution: "C) Second",
    topic: "Time",
    difficulty: "Easy",
    type: "Multiple Choice"
  },
  {
    id: 10,
    question: "A simple pendulum takes 20 seconds to complete 10 oscillations. What is the time period of the pendulum?",
    solution: "Time period = Total Time / Number of oscillations = 20s / 10 = 2.0 seconds.",
    topic: "Time",
    difficulty: "Medium",
    type: "Calculation"
  },
  {
    id: 11,
    question: "Why do scientists use 'light years' to measure distances in space instead of kilometres?",
    solution: "Distances between stars and galaxies are so vast that using kilometres would result in extremely large, unmanageable numbers. Light years provide a more practical scale.",
    topic: "Astronomy",
    difficulty: "Medium",
    type: "Descriptive"
  },
  {
    id: 12,
    question: "Which instrument is specifically used to measure the mass of a substance in a laboratory? A) Spring balance B) Digital balance C) Measuring cylinder D) Thermometer",
    solution: "B) Digital balance",
    topic: "Mass",
    difficulty: "Easy",
    type: "Multiple Choice"
  },
  {
    id: 13,
    question: "What is the lower meniscus, and why is it important when measuring liquid volume?",
    solution: "The lower meniscus is the curve formed by the surface of a liquid in a container. It is important because readings must be taken at the lowest point of this curve for accuracy.",
    topic: "Volume",
    difficulty: "Medium",
    type: "Short Answer"
  },
  {
    id: 14,
    question: "How many millimetres are in 1.2 metres?",
    solution: "1.2 m = 1.2 × 1000 = 1200 mm.",
    topic: "Length",
    difficulty: "Easy",
    type: "Calculation"
  },
  {
    id: 15,
    question: "Define 'temperature' in scientific terms.",
    solution: "Temperature is a measure of how hot or cold an object is.",
    topic: "Temperature",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 16,
    question: "List two differences between a mercury-in-glass thermometer and a digital thermometer.",
    solution: "1. Mercury thermometers use the expansion of liquid, while digital thermometers use electronic sensors. 2. Digital thermometers are usually faster and easier to read.",
    topic: "Temperature",
    difficulty: "Medium",
    type: "Descriptive"
  },
  {
    id: 17,
    question: "If a stopwatch shows 01:15:40, what is the total time in seconds?",
    solution: "(1 minute × 60) + 15 seconds + 0.40 seconds = 60 + 15.40 = 75.40 seconds.",
    topic: "Time",
    difficulty: "Hard",
    type: "Calculation"
  },
  {
    id: 18,
    question: "Explain the importance of 'data logging' in scientific experiments.",
    solution: "Data logging allows for the automatic and continuous collection of data over long periods, reducing human error and allowing for more precise analysis.",
    topic: "Data Logging",
    difficulty: "Medium",
    type: "Descriptive"
  },
  {
    id: 19,
    question: "Which prefix represents the factor 1/100? A) Kilo B) Milli C) Centi D) Nano",
    solution: "C) Centi",
    topic: "SI Units",
    difficulty: "Easy",
    type: "Multiple Choice"
  },
  {
    id: 20,
    question: "A rectangular box has dimensions 10cm by 5cm by 2cm. What is its volume?",
    solution: "Volume = 10 × 5 × 2 = 100 cm³.",
    topic: "Volume",
    difficulty: "Easy",
    type: "Calculation"
  },
  {
    id: 21,
    question: "What is the SI unit for mass? A) Gram B) Milligram C) Kilogram D) Pound",
    solution: "C) Kilogram",
    topic: "Mass",
    difficulty: "Easy",
    type: "Multiple Choice"
  },
  {
    id: 22,
    question: "Convert 500 millilitres to cubic centimetres (cm³).",
    solution: "1 ml = 1 cm³, so 500 ml = 500 cm³.",
    topic: "Volume",
    difficulty: "Easy",
    type: "Calculation"
  },
  {
    id: 23,
    question: "Why is it important to have a standard system of units (SI) worldwide?",
    solution: "It allows scientists across the globe to compare data, communicate results clearly, and avoid confusion caused by different local systems.",
    topic: "Fundamental Concepts",
    difficulty: "Medium",
    type: "Descriptive"
  },
  {
    id: 24,
    question: "If the area of a square is 49 cm², what is the length of one side?",
    solution: "Side = √Area = √49 = 7 cm.",
    topic: "Area",
    difficulty: "Medium",
    type: "Calculation"
  },
  {
    id: 25,
    question: "Identify the odd one out: Metre, Kilogram, Litre, Second.",
    solution: "Litre. (The others are standard SI base units, while Litre is a metric unit for volume but not the base SI unit, which is Cubic Metre).",
    topic: "SI Units",
    difficulty: "Medium",
    type: "Short Answer"
  },
  {
    id: 26,
    question: "How many seconds are in 2 hours and 15 minutes?",
    solution: "(2 × 3600) + (15 × 60) = 7200 + 900 = 8100 seconds.",
    topic: "Time",
    difficulty: "Medium",
    type: "Calculation"
  },
  {
    id: 27,
    question: "Which instrument is most suitable for measuring the thickness of a single sheet of paper? A) Metre rule B) Measuring tape C) Micrometer (or very fine scale) D) Digital balance",
    solution: "C) Micrometer (Note: At Grade 7, they may just know it requires something more precise than a metre rule).",
    topic: "Length",
    difficulty: "Hard",
    type: "Multiple Choice"
  },
  {
    id: 28,
    question: "What does the term 'oscillation' mean in the context of a pendulum?",
    solution: "One complete 'to-and-fro' motion of the pendulum bob.",
    topic: "Time",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 29,
    question: "Convert 35°C to Kelvin. (Hint: K = °C + 273)",
    solution: "K = 35 + 273 = 308 K.",
    topic: "Temperature",
    difficulty: "Medium",
    type: "Calculation"
  },
  {
    id: 30,
    question: "A measuring cylinder contains 40ml of water. A stone is dropped in, and the level rises to 58ml. What is the volume of the stone?",
    solution: "Volume = 58ml - 40ml = 18 ml (or 18 cm³).",
    topic: "Volume",
    difficulty: "Easy",
    type: "Calculation"
  },
  {
    id: 31,
    question: "True or False: The mass of an object changes if you take it to the moon.",
    solution: "False. Mass is the amount of substance and remains constant; weight changes with gravity.",
    topic: "Mass",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 32,
    question: "What is the SI unit for area?",
    solution: "Square metre (m²).",
    topic: "Area",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 33,
    question: "Describe the function of the 'kink' in a clinical mercury thermometer.",
    solution: "The kink prevents the mercury from falling back into the bulb immediately after the thermometer is removed from the patient, allowing time for an accurate reading.",
    topic: "Temperature",
    difficulty: "Hard",
    type: "Descriptive"
  },
  {
    id: 34,
    question: "What is the volume of a cylinder with radius 7cm and height 10cm? (Use π = 22/7)",
    solution: "Volume = πr²h = (22/7) × 7 × 7 × 10 = 1540 cm³.",
    topic: "Volume",
    difficulty: "Hard",
    type: "Calculation"
  },
  {
    id: 35,
    question: "Which of these is NOT a physical quantity? A) Length B) Happiness C) Mass D) Time",
    solution: "B) Happiness (as it cannot be measured with a standard unit).",
    topic: "Fundamental Concepts",
    difficulty: "Easy",
    type: "Multiple Choice"
  },
  {
    id: 36,
    question: "Convert 0.05 kilometres to metres.",
    solution: "0.05 km = 0.05 × 1000 = 50 metres.",
    topic: "Length",
    difficulty: "Medium",
    type: "Calculation"
  },
  {
    id: 37,
    question: "What is the appropriate SI unit for measuring the distance between two cities?",
    solution: "Metre (m), though Kilometre (km) is more commonly used for convenience.",
    topic: "SI Units",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 38,
    question: "Explain why we usually measure 20 oscillations instead of just 1 when finding the period of a pendulum.",
    solution: "Measuring multiple oscillations and then dividing reduces the timing error caused by human reaction time when starting and stopping the stopwatch.",
    topic: "Time",
    difficulty: "Hard",
    type: "Descriptive"
  },
  {
    id: 39,
    question: "A digital balance shows 0.45 kg. What is this mass in milligrams?",
    solution: "0.45 kg = 450 g = 450,000 mg.",
    topic: "Mass",
    difficulty: "Hard",
    type: "Calculation"
  },
  {
    id: 40,
    question: "What happens to the volume of most liquids when they are heated?",
    solution: "The volume increases (the liquid expands).",
    topic: "Temperature",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 41,
    question: "Identify the instrument used to measure very short intervals of time accurately.",
    solution: "Stopwatch or Stopclock.",
    topic: "Time",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 42,
    question: "What is the area of a triangle with base 10cm and height 6cm?",
    solution: "Area = 1/2 × base × height = 1/2 × 10 × 6 = 30 cm².",
    topic: "Area",
    difficulty: "Medium",
    type: "Calculation"
  },
  {
    id: 43,
    question: "If a light year is approximately 9.46 trillion km, how far is a star that is 4 light years away?",
    solution: "4 × 9.46 = 37.84 trillion kilometres.",
    topic: "Astronomy",
    difficulty: "Medium",
    type: "Calculation"
  },
  {
    id: 44,
    question: "Which part of a measuring cylinder helps you read the volume accurately?",
    solution: "The graduated scale or markings on the side.",
    topic: "Volume",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 45,
    question: "Define the term 'Prefix' in the SI system and give an example.",
    solution: "A prefix is added to the beginning of a unit to form a larger or smaller unit. Example: 'Kilo' in Kilometre.",
    topic: "SI Units",
    difficulty: "Medium",
    type: "Short Answer"
  },
  {
    id: 46,
    question: "Calculate the volume of a room that is 5m long, 4m wide, and 3m high.",
    solution: "Volume = 5 × 4 × 3 = 60 m³.",
    topic: "Volume",
    difficulty: "Easy",
    type: "Calculation"
  },
  {
    id: 47,
    question: "What is the boiling point of water in Kelvin?",
    solution: "100°C + 273 = 373 K.",
    topic: "Temperature",
    difficulty: "Medium",
    type: "Calculation"
  },
  {
    id: 48,
    question: "Why can't we use a measuring tape to measure the volume of a liquid directly?",
    solution: "Measuring tapes measure length (one dimension), while volume requires three dimensions or capacity, which measuring tapes are not designed to hold or measure.",
    topic: "Volume",
    difficulty: "Medium",
    type: "Descriptive"
  },
  {
    id: 49,
    question: "State the SI unit of volume.",
    solution: "Cubic metre (m³).",
    topic: "Volume",
    difficulty: "Easy",
    type: "Short Answer"
  },
  {
    id: 50,
    question: "Summarize the steps to find the volume of a regular solid cuboid.",
    solution: "1. Measure the length, width, and height using a metre rule. 2. Multiply these three measurements together (V = l × w × h). 3. Ensure the units are consistent (e.g., all in cm or all in m).",
    topic: "Volume",
    difficulty: "Medium",
    type: "Descriptive"
  }
];
