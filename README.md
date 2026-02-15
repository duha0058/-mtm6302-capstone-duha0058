Your Full Name- Vijay Duhan

Student Number- 041178881

Capstone Project Name- Cosmos

Design Choices-For the Cosmos project, the visual design shifts from a structural low-fidelity wireframe to a high-fidelity "Dark Mode" aesthetic. The goal was to create an immersive, cinematic experience that mirrors the vastness of space.

Color and Font Selection
color Palette:
Primary: Deep space blue (#05070A)
Secondary: Solar Orange (#FF6B00) AND Nebula Blue (#00C2CB)
Accent: Stark White: (#FFFFFF)

Typography:
Headings: A playful Script FOnt
Body Text: A clean Sans-Serif

Dekstop View:
Utilizes a wide layout with a dedicated "Hero Section" to showcase the Astronomy Picture of the Day. The content below follows a 3-column grid for "Related Topics" and "Image Details," maximizing the use of screen real estate.

Mobile/Tablet View:
The grid adapts to a 2-column layout. The main image remains prominent, while secondary information wraps fluidly to ensure text remains readable without shrinking.

 Usability and User Experience Improvements:

 Visual Heirarchy: The design establishes a clear hierarchy using size and color. The "Today's Image" is the largest element, immediately telling the user what is most important. Secondary data is contained in smaller, uniform cards.

 Accessibility: By using a dark interface, the design reduces the glare often associated with bright white websites, which is particularly helpful for users viewing the site in low-light environments (a common context for astronomy enthusiasts).

 Iconography: The move from a text-heavy wireframe to a visual card layout allows users to quickly scan headers and images to find the content they are interested in, rather than reading long blocks of text.

 Steps Takebn to create the prototype

 1: STructure and Setup
 Git Workflow: Created a new branch named `prototype-development` to isolate changes. Established a clean folder structure separating HTML, CSS, JavaScript, and a `designs/` folder for assets.
 HTML Architecture:Built the `index.html` file using semantic HTML5 tags (`<header>`, `<main>`, `<section>`, `<footer>`) to ensure accessibility and proper document flow.
 Asset Integration: Exported high-fidelity assets (Big Sun, Blue Galaxy, etc.) and integrated them into the layout using responsive `<img>` tags.

 2:Styling CSS
 Color Palette: Defined CSS Custom Properties (Variables) to strictly adhere to the "Deep Space" theme:
  `--bg-dark` (#05070A) for the primary background.
  `--accent-orange` (#FF6B00) for high-contrast highlights (matching the Sun image).

 3:Layout systems
 CSS Grid: Used for the "Featured Card" (2-column split) and the "Info Grid" (3-column layout) to perfectly match the visual mockup.
 Flexbox: Utilized for the Navigation bar and Footer to align items horizontally.

4:Resouces Used
Fonts: [Google Fonts](https://fonts.google.com/) - Used the Inter font family for a clean, scientific, and modern typography style.
Icons: [Font Awesome](https://fontawesome.com/) - Used for the Search icon, Social Media icons, and UI indicators (arrows, meteors).
Code Validation:W3C HTML Validator to ensure compliant code.