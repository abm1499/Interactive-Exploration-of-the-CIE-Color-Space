# Interactive Exploration of the CIE Color Space - Master’s Research Project

## Project Description

The "Interactive Exploration of the CIE Color Space" is a Master’s research project conducted by Ammar Bin Mannan at the Technische Universität Ilmenau under the Department of Computer Science and Automation, within the Data-intensive Systems and Visualization Group. Registered on October 31, 2023, and submitted on March 1, 2024, this project was supervised by Dr.-Ing. Ulf Döring and chaired by Prof. Dr.-Ing. Patrick Mäder.

### Overview
This research addresses the challenge of understanding the CIE XYZ color space—a foundational model in color science that quantifies human color perception in a device-independent manner. Due to its three-dimensional nature, the CIE XYZ space can be difficult to grasp using traditional static diagrams and textual explanations. To overcome this, the project developed an interactive web application designed to facilitate immersive learning and exploration. The application features a step-by-step 3D visualization of the CIE XYZ space, an embedded interactive RGB cube, and educational tools such as quizzes and tasks. These elements enable users to manipulate visualizations, explore color relationships, and engage actively with the model, fostering deeper understanding and spatial awareness.

### Objectives
- Create a fully interactive 3D visualization of the CIE XYZ color space.
- Implement a step-by-step construction approach for structured learning.
- Integrate an interactive RGB cube to illustrate relationships between color models.
- Provide an engaging, accessible learning environment with quizzes and exercises.

### Significance
This project contributes a valuable educational tool for students, educators, and professionals in fields like graphic design, photography, and computer graphics. By bridging theoretical concepts with practical interaction, it enhances accessibility, engagement, and comprehension of color science principles.

---

## README.md

### Interactive Exploration of the CIE Color Space

Welcome to my Master’s research project, "Interactive Exploration of the CIE Color Space," conducted at Technische Universität Ilmenau. This project develops an interactive web application to teach and explore the CIE XYZ color space, a fundamental model in color science.

#### Project Details
- **Institution**: Technische Universität Ilmenau, Department of Computer Science and Automation
- **Group**: Data-intensive Systems and Visualization Group
- **Researcher**: Ammar Bin Mannan (ammar-bin.mannan@tu-ilmenau.de)
- **Academic Chair**: Prof. Dr.-Ing. Patrick Mäder
- **Supervisor**: Dr.-Ing. Ulf Döring
- **Registration Date**: October 31, 2023
- **Submission Date**: March 1, 2024
- **Course**: Master of Research in Computer and System Engineering

#### Abstract
The CIE XYZ color space, established in 1931, is a device-independent model representing all colors visible to the human eye. Its three-dimensional structure can be challenging to understand using traditional methods. This project introduces a web-based tool featuring:
- A 3D visualization of the CIE XYZ space with step-by-step construction.
- An interactive RGB cube embedded within the XYZ space.
- Quizzes and tasks to reinforce learning.
This tool promotes active engagement, making color science accessible and engaging for educational and professional use.

#### Features
- **Interactive 3D Visualization**: Rotate, zoom, and explore the CIE XYZ space.
- **Step-by-Step Reveal**: Gradually display axes, triangles, and the RGB cube.
- **RGB Cube Integration**: Adjust RGB values and see real-time changes in XYZ space.
- **Second RGB Cube**: Compare two RGB models simultaneously.
- **Quiz Module**: Test knowledge with question-only or 3D-integrated modes.
- **Tasks/Exercises**: Apply concepts through practical scenarios.
- **Educational Modes**: Tailored interfaces for teaching, student learning, and advanced exploration.

#### Technology Stack
- **HTML**: Structure and UI elements.
- **CSS**: Styling for a user-friendly interface.
- **JavaScript**: Core logic and interactivity.
- **p5.js**: Lightweight library for 3D rendering and manipulation.

#### System Architecture
- **index.js**: Main HTML structure and UI components.
- **script.js**: 3D logic for CIE XYZ visualization.
- **CMYK.js**: Logic for additional color model exploration (e.g., CMYK cube).
- **quiz.js**: Quiz functionality with dynamic question display and feedback.
- **CSS Stylesheets**: Consistent visual design.

#### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/abm1499/Interactive-Exploration-of-the-CIE-Color-Space
2. **Navigate to the Project Directory:**:
   ```bash
   cd Interactive-Exploration-of-the-CIE-Color-Space
2. **Open in a Browser:**:
   ```bash
   {your favorite browser name} index.html

#### Usage
- **Explore the 3D Model:** Use checkboxes to reveal components and rotate the model.
- **Interact with RGB Cubes:** Adjust sliders to see color changes in real-time.
- **Take Quizzes:** Test your understanding with integrated or standalone questions.
- **Complete Tasks:** Apply knowledge through interactive exercises.

#### Results
The application successfully delivers:

- A dynamic 3D visualization of the CIE XYZ space.
- Enhanced learning through interactivity and structured exploration.
- Tools for educators to assess and guide students.

#### Future directions
- Add more color models (e.g., HSL, HSV).
- Integrate multimedia tutorials.
- Enhance with color pickers and gamut visualizations.
- Conduct usability testing for iterative improvements.
