const inventory = [
    { name: "Banana", color: "Yellow", calories: 105 },
    { name: "Apple", color: "Red", calories: 95 },
    { name: "Lemon", color: "Yellow", calories: 37 },
    { name: "Strawberry", color: "Red", calories: 33 },
    { name: "Avocado", color: "Green", calories: 160 },
    { name: "Grapes", color: "Purple", calories: 62 },
    { name: "Kiwi", color: "Green", calories: 42 }
  ];
  
  // Ascending order (lowest calories first)
  const ascending = [...inventory].sort((a, b) => a.calories - b.calories);
  
  // Descending order (highest calories first)
  const descending = [...inventory].sort((a, b) => b.calories - a.calories);
  
  console.log("Ascending order by calories:");
  console.table(ascending);
  
  console.log("Descending order by calories:");
  console.table(descending);     