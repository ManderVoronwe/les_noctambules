import logo from './logo.svg';
import './App.css';
import Question from './components/Question'
import HoverEffect from './components/HoverEffect'
function App() {
  const text = "Le changement climatique est un phénomène mondial caractérisé par l'augmentation des températures moyennes de la surface de la Terre. Cela a des conséquences graves sur l\'environnement, comme la fonte des glaciers, l'élévation du niveau de la mer et la perturbation des écosystèmes. ";
  const source = "Source : Rapport du Groupe d'experts intergouvernemental sur l'évolution du climat (GIEC) ";
  
  const data= [{
    question: "Quel gaz est principalement responsable du réchauffement climatique ?",
    choices: [{answer: "Dioxyde de carbone (CO2)", correct: true},
     {answer: "Méthane (CH4)", correct: false},
     {answer: "Protoxyde d'azote (N2O)", correct: false},
     {answer: "Gaz fluorés", correct: false}
    ]
  },
  {
    question: "Quel phénomène climatique résulte de l'augmentation des températures de surface de l'océan Pacifique équatorial ?",
    choices: [{answer: "El Niño", correct: true},
     {answer: "La Mousson", correct: false},
     {answer: "La Nina", correct: false},
     {answer: "La Tempête de sable", correct: false}
    ]
  },
  {
    question: "Quel secteur est souvent considéré comme le plus grand émetteur de gaz à effet de serre ?",
    choices: [{answer: "Transport", correct: false},
     {answer: "Industrie", correct: true},
     {answer: "Agriculture", correct: false},
     {answer: "Gaz fluorés", correct: false}
    ]
  },
  {
    question: "Quelle est la principale conséquence du changement climatique sur les écosystèmes marins ?",
    choices: [{answer: "Acidification des océans", correct: true},
     {answer: "Élévation du niveau de la mer", correct: false},
     {answer: "Perte de biodiversité", correct: false},
     {answer: "Augmentation des températures de l'eau", correct: false}
    ]
  }
];
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Question data={data}> </Question>
        

        <HoverEffect text={text} source={source}></HoverEffect>
        
      </header>
    </div>
  );
}

export default App;
