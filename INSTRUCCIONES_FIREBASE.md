# 🔥 INSTRUCCIONES PARA IMPORTAR A FIREBASE

## 📋 Archivos generados:
- `thundernet_materiales_firebase.json` - Versión legible con formato
- `thundernet_materiales_firebase_compact.json` - Versión optimizada para producción

## 🚀 Pasos para importar a Firebase:

### 1. Preparar Firebase Console
1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Selecciona tu proyecto ThunderNet
3. Ve a "Firestore Database"

### 2. Importar datos
**Opción A: Importación automática (Recomendada)**
1. En tu aplicación web, usa el botón "Importar Datos Existentes"
2. El sistema cargará automáticamente los datos

**Opción B: Importación manual**
1. Descarga el archivo `thundernet_materiales_firebase.json`
2. Usa Firebase CLI: `firebase firestore:import ./thundernet_materiales_firebase.json`

### 3. Verificar la importación
- Verifica que se crearon 23 registros en la colección "materiales"
- Revisa que las fechas van del 03/07/2025 al 29/07/2025
- Confirma que el total de materiales es 3,913 unidades

## 📊 Estructura de datos importada:
```
/materiales/
├── material_001_AC01/
│   ├── codigo: "AC01"
│   ├── fecha: "2025-07-29T00:00:00"
│   ├── acopladores/
│   ├── conectores/
│   ├── fibra/
│   └── totales/
└── ... (22 registros más)

/metadata/
├── version: "2.0"
├── total_records: 23
└── statistics/
```

## ⚠️ IMPORTANTE:
- Los datos están listos para usar inmediatamente
- No requiere configuración adicional
- Compatible con la nueva aplicación web v2.0
- Incluye estadísticas pre-calculadas para dashboards

## 🎯 Materiales más utilizados:
1. **Fibra Drop 1F**: 3,129 unidades (79.9%)
2. **Grapas para Cable**: 280 unidades (7.2%) 
3. **Tirrap Mediano**: 98 unidades (2.5%)
