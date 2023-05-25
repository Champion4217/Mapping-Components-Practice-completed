import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./entry";

function createEntry(Entrys){
  return<Entry 
    key={Entrys.id}
    emoji={Entrys.emoji}
    name={Entrys.name}
    meaning={Entrys.meaning}
    />
  
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      {emojipedia.map(createEntry)}
        
      </dl>
    </div>
  );
}

export default App;
