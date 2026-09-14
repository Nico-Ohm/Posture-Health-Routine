# Posture Health Routine

A polished, mobile-first posture routine designed for short daily sessions on iPhone and other modern devices.

The project offers six guided mobility and strengthening exercises, simple daily progress tracking, an activity calendar, streak statistics, and installable web-app behavior without requiring an account or backend service.

## Live Demo

[Open the Posture Health Routine](https://posture-health-routine.vercel.app)

## Project Overview

The application was created as a lightweight personal wellness companion. Its primary goal is to make a brief posture-focused routine approachable, visually calm, and easy to repeat every day.

Each exercise is presented as a compact card with a custom illustration, estimated duration, short purpose statement, and expandable step-by-step instructions. Completed exercises immediately update the daily progress indicator and are reflected in the calendar and statistics view.

The interface is optimized for an iPhone-sized viewport while remaining responsive on tablets and desktop browsers.

## Key Features

- Six guided posture, mobility, and activation exercises
- Expandable step-by-step instructions
- One-tap daily completion tracking
- Visual progress indicator with completed exercise count and minutes
- Monthly activity calendar with partial and completed states
- Current streak, active-day, and total-minute statistics
- Motivation milestones based on the first active day
- Persistent progress stored locally in the browser
- Responsive layout with iPhone safe-area support
- Dedicated Apple touch icon and installable web-app metadata
- No account, analytics integration, database, or external API

## Daily Routine

The current exercise order is:

1. Neck retraction
2. Neck side stretch
3. Wall angels
4. Doorway chest stretch
5. Shoulder-blade activation
6. Thoracic spine extension

The full routine is designed to take approximately twelve minutes. Exercise completion can be changed at any time during the current day.

## User Flow

1. Open the application in Safari or another modern browser.
2. Expand an exercise card to review its instructions.
3. Complete the exercise and tap its check button.
4. Follow daily progress through the spine-inspired indicator.
5. Open the calendar to review active days, minutes, streaks, and milestones.
6. On iPhone, use **Share → Add to Home Screen** for an app-like experience.

## Privacy

The application is intentionally private by design at the data level:

- No registration or user profile is required.
- No personal information is collected.
- No exercise data is transmitted to a server.
- No database, analytics service, webhook, or tracking pixel is connected.
- Progress is stored only in the browser through `localStorage`.
- Data remains on the device and browser profile where it was created.
- Clearing browser data or using the reset control removes the stored history.

This means neither the repository owner nor the hosting provider receives the user's exercise history through the application.

## Project Scope

This repository demonstrates a personal, browser-based routine and progress tracker. Its content is intended for general wellness and informational use. It does not diagnose conditions, monitor health, or provide individualized treatment.

## Technology

The project intentionally uses a small, dependency-free frontend stack:

- Semantic HTML5
- Modern CSS with responsive design tokens and safe-area support
- Vanilla JavaScript for state, navigation, calendar rendering, and statistics
- Browser `localStorage` for on-device persistence
- Web App Manifest and Apple touch icons for mobile installation
- Vercel for static production hosting

No build pipeline, package installation, environment variables, or runtime backend is required.

## Project Structure

```text
Posture-Health-Routine/
├── assets/
│   ├── apple-touch-icon.png       iPhone home-screen icon
│   ├── home-screen-icon-1024.png  High-resolution app icon
│   ├── icon-512.png               Standard web-app icon
│   ├── logo-green-head.png        In-app brand mark
│   └── aufrichten-logo.svg        Earlier vector logo asset
├── index.html                     Complete application interface and logic
├── haltungs-routine.html          Original standalone source version
├── manifest.webmanifest           Installable web-app metadata
├── Logo_green_Head.png            Original supplied logo artwork
└── README.md                      Project documentation
```

## Run Locally

Clone the repository:

```bash
git clone https://github.com/Nico-Ohm/Posture-Health-Routine.git
cd Posture-Health-Routine
```

Start a simple static file server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

The project can also be previewed by opening `index.html` directly, although a local server more closely matches the production environment.

## Deployment

The production version is deployed as a static Vercel project:

[https://posture-health-routine.vercel.app](https://posture-health-routine.vercel.app)

Because the application has no build process or backend, deployment serves the repository files directly. No secrets or environment variables are required.

## Design Direction

The visual system combines warm neutral surfaces, sage-green accents, serif display typography, and restrained illustrations. The design aims to feel calm and supportive rather than clinical. Compact cards, generous touch targets, and clear completion feedback keep the routine comfortable to use on a phone.

The head-profile branding and reduced home-screen icon were prepared specifically for the mobile experience.

## Author

Created by [Nico Ohm](https://github.com/Nico-Ohm).
