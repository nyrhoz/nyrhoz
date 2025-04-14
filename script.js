    const container = document.getElementById("classesContainer");
  
   function renderClasses(classes) {
    container.innerHTML = "";
    classes.forEach(c => {
      const card = document.createElement("div");
      card.className = "class-card";
      card.innerHTML = 
      container.appendChild(card);
    });
  }
  
  searchBar.addEventListener("input", () => {
    const term = searchBar.value.toLowerCase();
    const filtered = classesMeta.filter(c => 
      c.name.toLowerCase().includes(term)  
      ,primary.toLowerCase().includes(term)  
      ,secondary.toLowerCase().includes(term)
    );
    renderClasses(filtered);
  });
  
  renderClasses(classesMeta);