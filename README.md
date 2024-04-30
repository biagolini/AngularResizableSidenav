# Angular Resizable Sidenav Demo

This project is a demonstration of how to implement resizable sidenav in Angular using dynamic side navigation with modules representing different parts of a house.

Inspired by the code shared by user mdmoin7 on StackBlitz: [Angular Ivy Resize Sidenav](https://stackblitz.com/edit/angular-ivy-resize-sidenav).

## Try

[Try on StackBlitz ⚡️](https://stackblitz.com/github/biagolini/AngularResizableSidenav)

## Overview

This project showcases a resizable sidenav with dynamic width using Angular. Each module represents a different area of a house (Garage, Bedroom, and Kitchen) for educational purposes.

## Getting Started

### Step 1: Check Angular Installation

Before getting started, ensure that Angular CLI is installed on your machine. Open the terminal and run the following command to check the Angular CLI version:

```bash
ng version
```

If Angular CLI is not installed, you can install it using the following command:

```bash
npm install -g @angular/cli
```

### Step 2: Set Up Development Environment

Choose a directory to store your project files. Navigate to this directory using the terminal and run the following command to create the base project with initial configurations:

```bash
ng new resizeable_sidenav --routing --no-standalone
```

### Step 3: Access Project Directory

Navigate to the project folder created to start working with the code:

```bash
cd resizeable_sidenav
```

### Step 4: Add Dependencies

Angular Material provides rich and well-tested UI components essential for modern Angular applications. To add Angular Material to your project, run the following command:

```bash
ng add @angular/material
```

During installation, you will be prompted to select a theme and other options. Choose according to your preferences. Note: In this demo I used deep purple/amber theme.

### Step 5: Install Angular Split

Install angular-split packages using npm:

```bash
npm install angular-split
```

### Step 6: Create Modules and Components

Use Angular CLI commands to generate modules and components for the project:

```bash
ng g m shared
ng g m bedroom --routing
ng g m garage --routing
ng g m kitchen --routing
ng g c shared/components/sidenav --no-standalone
ng g c bedroom/components/bedroom-home --no-standalone
ng g c garage/components/garage-home --no-standalone
ng g c kitchen/components/kitchen-home --no-standalone
```

### Step 7: Develop Global and Local Navigation Routes

Update the root route to point to your preferred route instead of the default page.

Configure global navigation route in src/app/app-routing.module.ts, and local navigation routes in the following files:

- src/app/bedroom/bedroom.module.ts
- src/app/garage/garage-routing.module.ts
- src/app/kitchen/kitchen-routing.module.ts

### Step 8: Develop Shared Module

Create a shared module to house common components, directives, and pipes. This helps in organizing and reusing code across the application.

Import the shared module into other modules that will use its components. See how to import the shared module in the following files:

- src/app/bedroom/bedroom.module.ts
- src/app/garage/garage.module.ts
- src/app/kitchen/kitchen.module.ts

### Step 9: Develop Sidenav with Dynamic Sides

Implement the main functionality of the application by developing the resizable sidenav with dynamic sides.

Explore the logic in the following files:

- src/app/shared/components/sidenav/sidenav.component.html
- src/app/shared/components/sidenav/sidenav.component.scss
- src/app/shared/components/sidenav/sidenav.component.ts

### Step 10: Develop Module Contents

Finally, develop the local content of your modules. As this is a didactic example, only HTML content is created in the following files:

- src/app/bedroom/components/bedroom-home/bedroom-home.component.html
- src/app/garage/components/garage-home/garage-home.component.html
- src/app/kitchen/components/kitchen-home/kitchen-home.component.html

Define global styles using the src/styles.scss file.

## Contributing

Feel free to submit issues, create pull requests, or fork the repository to help improve the project.

## License and Disclaimer

This project is open-source and available under the MIT License. You are free to copy, modify, and use the project as you wish. However, any responsibility for the use of the code is solely yours. Please use it at your own risk and discretion.
