# itp-wou-fall-2022

This is the repository for Fall 2022 ITP class Website of You.

## Info

- Joohyun Park [📧](mailto:jhp527@nyu.edu)
- [Syllabus](https://jooohyunpark.github.io/itp-wou-fall-2022/)
- Class dates
  - 10/01/2022, Saturday, 12:20pm-3:20pm
  - 10/08/2022, Saturday, 12:20pm-3:20pm
  - 10/15/2022, Saturday, 12:20pm-3:20pm
- [Office hours](https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ38e_td9fOuExnsHGYNL-FhkFVHDDICVNefmc2V0rmHLALBSDYYQ_irIQHs3RCnAxpkBLUo0OcO)
  - 10/01/2022, Saturday, 3:30pm-4:30pm
  - 10/08/2022, Saturday, 3:30pm-4:30pm
  - 10/15/2022, Saturday, 3:30pm-4:30pm

## Course Ojbectives

At the completion of this course, the students will:

1. Be comfortable designing UI/UX for static web application
2. Learn modular programming patterns in javascript using Vue.js
3. Build and deploy a custom portfolio website (or equivalent)

## Get Started

Clone this repo. It has weekly code examples in each folder.

```bash
$ git clone https://github.com/jooohyunpark/itp-wou-fall-2022.git
$ cd itp-wou-fall-2022
```

You can find different examples under `/pages` in weekly folder. To run these example, run following command from the root.

```bash
$ cd week1
$ yarn install # npm install
$ yarn dev  # npm run dev

# localhost:3000
# localhost:3000/example-1
# ...
```

## Prerequisites

Please install these on your machine before the first class.

- [Git](https://github.com/git-guides/install-git)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) - Comes with Node.js installation. You can also use [yarn](https://classic.yarnpkg.com/en/) if you want.
- Node version managers (optional) – Any node version manager such as [n](https://github.com/tj/n) (recommended) or [nvm](https://github.com/nvm-sh/nvm).

## Week 1 - Intro / Vue Basics / Directives

- Intro

  - [Portfolio website examples](https://github.com/jooohyunpark/itp-wou-fall-2022/blob/main/Note.md#list-of-creative-portfolio-sites)
  - [Git](https://www.atlassian.com/git/tutorials/why-git), [Github Desktop](https://desktop.github.com/), [npm](https://www.npmjs.com/package/p5), [package.json](https://nodejs.dev/learn/the-package-json-guide)
  - [javascript frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)

- Vue basics

  - [Vue explained in 100s](https://youtu.be/nhBVL41-_Cw)
  - [Nuxt code structure](https://nuxtjs.org/docs/get-started/directory-structure/)
  - [Data](https://vuejs.org/api/options-state.html#data), [methods](https://vuejs.org/api/options-state.html#methods)
  - [Lifecycle hooks](https://v2.vuejs.org/v2/guide/instance.html#Lifecycle-Diagram) (mounted, beforeDestroy)
  - Navigation with [NuxtLink](https://nuxtjs.org/docs/features/nuxt-components#the-nuxtlink-component)
  - [Components](https://nuxtjs.org/docs/directory-structure/components) and [props](https://vuejs.org/api/options-state.html#props)

- Directives
  - [v-bind (:)](https://vuejs.org/api/built-in-directives.html#v-bind) - dynamic data (src, class, id, key)
  - [v-if](https://vuejs.org/api/built-in-directives.html#v-if) - render elements conditionally
  - [v-for](https://vuejs.org/api/built-in-directives.html#v-for) - loop through data
  - [v-on (@)](https://vuejs.org/api/built-in-directives.html#v-on) - user events (click, mouseover, keypress)

## Week 2 - Advanced styles / Responsive Layout / Libraries

- Advanced styles 
  - [Scss](https://sass-lang.com/guide) basics and [setup in Nuxt](https://github.com/jooohyunpark/itp-wou-fall-2022/blob/main/Note.md#using-scss-in-nuxt)
  - Configure [global style](https://nuxtjs.org/docs/configuration-glossary/configuration-css/)

- Responsive Layout
  - Responsive layout using [bootstrap grid system](https://getbootstrap.com/docs/5.2/layout/grid/)
  - [Bootstrap UIs](https://getbootstrap.com/docs/5.2/components/dropdowns/)

- Libraries

  - Create global function
  - Use [p5.js](https://p5js.org/)/[three.js](https://threejs.org/) in component

## Week 3 - Events / Deploy / Presentations

- Recap (TBD)

  - [Demo site](https://github.com/jooohyunpark/itp-wou-fall-2022/tree/main/demo-site)
    - Home page
    - Project page
    - About page
    - Header/Footer

- Deploy

  - [Static site generation](https://nuxtjs.org/docs/get-started/commands/#static-deployment-pre-rendered)
  - [Github Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
  - [Dreamhost](https://www.dreamhost.com/)

- Presentation

## Tools

- [Vue.js](https://vuejs.org/) – The progressive javaScript framework for building UI
- [Nuxt.js](https://nuxtjs.org/) – JavaScript library based on Vue.js
- [Sass](https://sass-lang.com/) – Powerful CSS extension language for advanced styling
- [Bootstrap](https://getbootstrap.com/) – CSS framework for responsive web development

## Additional Resources

- [Getting started with Vue](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Quick introduction to Nuxt](https://www.youtube.com/watch?v=7ITypVi-qRY)
- [Getting started with Nuxt](https://explorers.netlify.com/learn/get-started-with-nuxt)
- [Nuxt tutorials](https://nuxtjs.org/tutorials)
- [Nuxt.js Fundamentals](https://vueschool.io/courses/nuxtjs-fundamentals?friend=nuxt&utm_source=Nuxtjs.org&utm_medium=Link&utm_content=Courses&utm_campaign=nuxtjs-fundamentals)
- [Learn CSS](https://web.dev/learn/css/)
- [Material Design responsive layout grid](https://material.io/design/layout/responsive-layout-grid.html#breakpoints)
- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Vuetify](https://vuetifyjs.com/en/) - Material Design Framerwork for Vue.js
- [Vuex](https://vuex.vuejs.org/) - State management pattern + library for Vue.js applications
- [Netlify](https://www.netlify.com/) – Serverless platform that enables git-based automated deployments

## Evaluation

You are required to attend all class meetings and submit all weekly assignments and a final project.

Grading (pass/fail) will be based on a combination of factors:

- Attendance, participation in class discussion, and engagement in other students' projects (40%)
- Assignments (40%)
- Final Project (20%)

Please see ITP's statement on Pass/Fail which states that a "Pass" is equivalent to an "A" or a "B" while anything less would be considered a "Fail".

Attendance is mandatory. Please inform your teacher via email if you are going to miss a class. Two unexcused absences is cause for failing the class. (An unexcused lateness of 10 minutes or more is equivalent to 1/2 an absence.)

This class will be participatory, you are expected to participate in discussions and give feedback to other students both in class and participate with their projects. This (along with attendance) is 40% of your grade.

Class will culminate with final projects. You are expected to push your abilities to produce something that utilizes what you have learned in the class that is useful in some manner to yourself or the world. This will comprise 20% of your grade.

## Statement of Academic Integrity

Plagiarism is presenting someone else’s work as though it were your own. More specifically, plagiarism is to present as your own: A sequence of words quoted without quotation marks from another writer or a paraphrased passage from another writer’s work or facts, ideas or images composed by someone else.

## Statement of Principle

The core of the educational experience at the Tisch School of the Arts is the creation of original academic and artistic work by students for the critical review of faculty members.  It is therefore of the utmost importance that students at all times provide their instructors with an accurate sense of their current abilities and knowledge in order to receive appropriate constructive criticism and advice.  Any attempt to evade that essential, transparent transaction between instructor and student through plagiarism or cheating is educationally self-defeating and a grave violation of Tisch School of the Arts community standards.  For all the details on plagiarism, please refer to page 10 of the Tisch School of the Arts, Policies and Procedures Handbook, which can be found online at https://tisch.nyu.edu/student-affairs/important-resources/tisch-policies-and-handbooks

## Statement on Accessibility

Please feel free to make suggestions to your instructor about ways in which this class could become more accessible to you. Academic accommodations are available for students with documented disabilities. Please contact the Moses Center for Students with Disabilities at 212 998-4980 for further information.

## Statement on Counseling and Wellness

Your health and safety are a priority at NYU. If you experience any health or mental health issues during this course, we encourage you to utilize the support services of the 24/7 NYU Wellness Exchange 212-443-9999. Also, all students who may require an academic accommodation due to a qualified disability, physical or mental, please register with the Moses Center 212-998-4980. Please let your instructor know if you need help connecting to these resources.

## Statement on use of Electronic Devices

Laptops will be an essential part of the course and may be used in class during workshops and for taking notes in lecture. Laptops must be closed during class discussions and student presentations. Phone use in class is strictly prohibited unless directly related to a presentation of your own work or if you are asked to do so as part of the curriculum.
