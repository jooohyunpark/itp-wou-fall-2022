# itp-wou-fall-2022

This is the repository for ITP class Website of You.

## Info

- Joohyun Park [📧](mailto:jhp527@nyu.edu)
- [Syllabus](https://jooohyunpark.github.io/itp-wou-fall-2022/)
- Class dates
  - 10/01/2022, Saturday, 12:20pm-3:20pm
  - 10/08/2022, Thursday, 12:20pm-3:20pm
  - 10/15/2022, Thursday, 12:20pm-3:20pm

## Course Ojbectives

At the completion of this course, the students will:

1. Be comfortable designing visuals/UX for static web application
2. Learn modular programming patterns in javascript using Vue.js
3. Build and deploy a custom portfolio website (or equivalent)

## Get Started

Clone this repo. It has weekly codebase in each folder.

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

  - [Some creative portfolio websites](https://github.com/jooohyunpark/itp-wou-fall-2022/tree/main/_note#:~:text=List%20of%20creative%20portfolio%20sites)
  - [Git](https://www.atlassian.com/git/tutorials/why-git), [npm](https://www.npmjs.com/package/p5), [package.json](https://nodejs.dev/learn/the-package-json-guide)
  - [javascript frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)

- Vue basics

  - [Vue explained in 100s](https://youtu.be/nhBVL41-_Cw)
  - [Nuxt code structure](https://nuxtjs.org/docs/get-started/directory-structure/)
  - [Data](https://vuejs.org/api/options-state.html#data), [props](https://vuejs.org/api/options-state.html#props), [computed value](https://vuejs.org/api/options-state.html#computed), [methods](https://vuejs.org/api/options-state.html#methods)
  - [Lifecycle hooks](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram) (created, mounted, unmounted)
  - Creating [components](https://nuxtjs.org/docs/directory-structure/components)
  - Navigation with [NuxtLink](https://nuxtjs.org/docs/features/nuxt-components#the-nuxtlink-component)

- Directives
  - v-if
  - v-for: loop through data
  - v-bind: rendering image
  - v-on: user events (click, mouse, mouseenter, mouseleave)

## Week 2 - Responsive Layout / Styles / Libraries

- Responsive Layout

  - Sass basics and useful features
  - Responsive layout using bootstrap

- Styles

  - [Transition](https://nuxtjs.org/docs/features/transitions) between pages
  - Use bootstrap UIs in component

- Libraries

  - Using global scripts
  - Port p5.js canvas in component
  - Port three.js scene in component

## Week 3 - State Management / Deploy / Presentations

- State Management

  - Emit events to parent
  - Event bus
  - Create dark mode toggle switch in footer
  - (vuex/store)

- Deploy

  - Build/generate command
  - Gitpage
  - Netlify
  - SFTP (dreamhost)

- Presentation

## Tools

- [Vue.js](https://vuejs.org/) – The progressive javaScript framework for building UI
- [Nuxt.js](https://nuxtjs.org/) – JavaScript library based on Vue.js
- [Sass](https://sass-lang.com/) – Powerful CSS extension language for advanced styling
- [Bootstrap](https://getbootstrap.com/) – CSS framework for responsive web development

## Additional Resources

- [Getting started with Vue](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Quick introduction to Nuxt](https://www.youtube.com/watch?v=7ITypVi-qRY)
- [Nuxt tutorials](https://nuxtjs.org/tutorials)
- [Vuetify](https://vuetifyjs.com/en/) - Material Design Framerwork for Vue.js
- [Vuex](https://vuex.vuejs.org/) - State management pattern + library for Vue.js applications
- [Netlify](https://www.netlify.com/) – Serverless platform that enables git-based automated deployments
- [Learn CSS](https://web.dev/learn/css/)

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

The core of the educational experience at the Tisch School of the Arts is the creation of original academic and artistic work by students for the critical review of faculty members. It is therefore of the utmost importance that students at all times provide their instructors with an accurate sense of their current abilities and knowledge in order to receive appropriate constructive criticism and advice. Any attempt to evade that essential, transparent transaction between instructor and student through plagiarism or cheating is educationally self-defeating and a grave violation of Tisch School of the Arts community standards. For all the details on plagiarism, please refer to page 10 of the Tisch School of the Arts, Policies and Procedures Handbook, which can be found online at: http://students.tisch.nyu.edu/page/home.html

## Statement on Accessibility

Please feel free to make suggestions to your instructor about ways in which this class could become more accessible to you. Academic accommodations are available for students with documented disabilities. Please contact the Moses Center for Students with Disabilities at 212 998-4980 for further information.

## Statement on Counseling and Wellness

Your health and safety are a priority at NYU. If you experience any health or mental health issues during this course, we encourage you to utilize the support services of the 24/7 NYU Wellness Exchange 212-443-9999. Also, all students who may require an academic accommodation due to a qualified disability, physical or mental, please register with the Moses Center 212-998-4980. Please let your instructor know if you need help connecting to these resources.

## Statement on use of Electronic Devices

Laptops will be an essential part of the course and may be used in class during workshops and for taking notes in lecture. Laptops must be closed during class discussions and student presentations. Phone use in class is strictly prohibited unless directly related to a presentation of your own work or if you are asked to do so as part of the curriculum.
