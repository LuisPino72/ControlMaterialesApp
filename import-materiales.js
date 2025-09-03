// import-materiales.js
const fs = require('fs');
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCQD8cR0CDAEXKvcQLHFocUVjMDLsTfvP0",
  authDomain: "control-de-materiales-aa944.firebaseapp.com",
  projectId: "control-de-materiales-aa944",
  storageBucket: "control-de-materiales-aa944.appspot.com",
  messagingSenderId: "351278560249",
  appId: "1:351278560249:web:cb480b35a1919fa1ca0328"
};

// Inicializar Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
const materialesCollection = collection(db, 'materiales');

// Leer el archivo JSON
const jsonData = fs.readFileSync('materiales.json', 'utf8');
const data = JSON.parse(jsonData);

// Mapeo de nombres de campos
const fieldMap = {
  "ACOPLADOR OPTICO APC": "acopladorAPC",
  "ACOPLADOR OPTICO UPC": "acopladorUPC",
  "CONECTOR MECANICO APC": "conectorAPC",
  "CONECTOR MECANICO UPC": "conectorUPC",
  "DIVISOR/SPLITER 1X16": "divisor1x16",
  "DIVISOR/SPLITER 1X8": "divisor1x8",
  "FIBRA DROP 1F": "fibraDrop1F",
  "GRAPAS PARA CABLE": "grapas",
  "MANGUITO TERMICO": "termos",
  "ONU GPON": "onu",
  "PATCH CORD 1.5 MTS UPC-UPC": "ptcAA",
  "PC-3M-SC-UPC-SC-APC-205": "ptcVA",
  "ROSETA": "roseta",
  "SERVILLETA": "servilletas",
  "TEIPE": "teipe",
  "TIRRAP GRANDE": "tirrapG",
  "TIRRAP MEDIANO": "tirrapM",
  "TIRRAP PEQUEÑO": "tirrapP",
  "CINTA DOBLE FACE": "cintaDobleFace",
  "TIRRO": "tirro"
};

// Procesar cada registro
data["MATERIALES C"].forEach((record, index) => {
  if (!record || index === 0) return; // Saltar el primer elemento null

  const formattedRecord = {
    id: Date.now().toString() + index,
    codigo: record.CODIGO,
    fecha: formatDate(record.FECHA),
    ...Object.keys(record).reduce((acc, key) => {
      if (key === "CODIGO" || key === "FECHA") return acc;
      const newKey = fieldMap[key];
      if (newKey) {
        acc[newKey] = parseInt(record[key]) || 0;
      }
      return acc;
    }, {})
  };

  console.log(`Importando registro ${index}:`, formattedRecord);
  addDoc(materialesCollection, formattedRecord)
    .then(() => console.log("✓ Registro agregado"))
    .catch(error => console.error("❌ Error al agregar:", error));
});

// Formatear fecha DD/MM/YYYY a YYYY-MM-DD
function formatDate(dateStr) {
  const parts = dateStr.split('/');
  return `${parts[2]}-${parts[1]}-${parts[0]}`;
}