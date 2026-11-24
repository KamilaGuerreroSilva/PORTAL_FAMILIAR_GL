# 🩵 Portal Familia GL <3

**Centro de mando digital familiar, de crianza, finanzas y pareja** diseñado especialmente para **Kamila Guerrero** e **Isidora López**, junto a sus hijos **Clemente (4 años)** y **Julián (2 años)**.

Construido como una aplicación web progresiva (**PWA**) 100% privada, sin servidores externos, con diseño adaptable a celulares (**iPhone y Android**) y computadores, memoria persistente en navegador e **histórico diario automático** en cada herramienta.

---

## ✨ Características Principales

* **🎨 Identidad Visual Turquesa & Tonos Pasteles:** Interfaz cálida y legible con modo claro y modo descanso nocturno.
* **📱 Instalable en Celular (PWA Offline):** Incluye `manifest.json` y `sw.js` para instalarse directamente en la pantalla de inicio de iOS (Safari) y Android (Chrome) y funcionar incluso sin conexión a internet.
* **💾 Persistencia Permanente + Histórico por Día:** Cada modificación se guarda automáticamente en `localStorage` (sobrevive al cierre del navegador y al apagado del equipo) y genera una fotografía diaria consultable y restaurable desde el botón **`📜 Histórico Día`** en cada módulo.
* **🔄 Sincronización Segura entre Dispositivos:** Exportación e importación global en formato `.JSON` (`Respaldar (.JSON)` / `Importar`) para compartir avances por WhatsApp entre los teléfonos de Kamila e Isidora sin exponer datos familiares en la nube.
* **🕊️ Paneles en Vivo en el Inicio:**
  * **Indicador de Turnos en Tiempo Real:** Muestra si Clemente y Julián están en casa con Kamila e Isidora o en visita con su papá (proyección automática fin de semana por medio desde el viernes 27 de noviembre de 2026 a las 17:30 hrs hasta el domingo 29 a las 17:30 hrs).
  * **Contador Kamila & Isidora:** Cuenta regresiva para cada **Cumplemes (1° de cada mes)** y su **Aniversario (1 de Abril)**, además del **Contador de Días sin Discutir** con racha de **5 estrellas (`⭐⭐⭐⭐⭐`)** al completar cada semana en paz.

---

## 🗂️ Arquitectura y Los 10 Súper-Módulos

```text
portal-familia-gl/
├── index.html                                 # Hub principal, buscador, paneles en vivo y respaldos JSON
├── manifest.json                              # Configuración PWA para instalación en móviles
├── sw.js                                      # Service Worker para caché offline en celulares
├── README.md                                  # Documentación del proyecto
└── modulos/
    ├── calendario_coparentalidad.html         # 1. Calendario 2026–2027, citas, amor y gastos 50/50
    ├── rutinas_sueno.html                     # 2. Rutinas por edad, mochila visita, sueño y esfínteres
    ├── escolaridad_ropa_regalos.html          # 3. Cursos, útiles semanales/mensuales, ropa y cumpleaños
    ├── panoramas_ninos.html                   # 4. Mapa interactivo Leaflet de plazas y cafés kid-friendly
    ├── pareja_bienestar_capsula.html          # 5. Frasco de citas, autocuidado individual y cápsula del tiempo
    ├── album_hitos.html                       # 6. Diario de hitos, frases graciosas y recuerdos GL <3
    ├── finanzas_hogar.html                    # 7. Alcancías por meta de ahorro y cuentas fijas mensuales
    ├── gestion_hogar.html                     # 8. Tareas semanales, semáforo pañales/despensa y proyectos
    ├── documentos_auto.html                   # 9. Bóveda de RUTs, vencimientos y bitácora del vehículo
    └── salud_menu_emergencia.html             # 10. Ficha pediátrica, tallas, menú semanal y llamadas 1 toque