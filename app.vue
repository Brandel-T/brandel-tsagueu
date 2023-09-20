<template>
  <div class="app lg:px-10">
    <div class="">
        <NavBar class="fixed left-0 right-0 shadow-lg mx-auto !bg-transparent" />
    </div>
    <div class="hero-wrapper after:animate-pulse before:animate-pulse before:delay-200 before:duration-1000">
        <Hero id="hero" class="z-1" />
    </div>
    <About id="about" class="-z-1" />
    <WorkExperience id="work" :jobs="jobs" />
    <Projects id="projects" :projects="projects" />
    <TechStack id="tech-stack" :recentTechnologies="recentTechStack" :items="techStack" />
  </div>
</template>

<script setup lang="ts">
import {JobType, ProjectType, TechStackType} from "~/utils/models";

const jobs: JobType[] = [
    {
        title: 'Software Developer',
        company: 'Robert Bosch GmbH',
        description: 'Well, the way they make shows is, they make one show. That show\'s called a pilot.  if they\'re going to make more shows.',
        locationFormat: 'remote',
        workFormat: 'part time',
        requirements: ['communication', 'Team player', 'Design thinking', 'Dev skill'],
        techStack: ['NestJS', 'Angular', 'MongoDB', 'TypeScript', 'Docker'],
        startDate: new Date('2023-05-01' ),
        endDate: new Date()
    },  {
        title: 'Software Developer',
        company: 'Robert Bosch GmbH',
        description: 'Well, the way they make shows is, they make one show. That show\'s called a pilot.  if they\'re going to make more shows.',
        locationFormat: 'remote',
        workFormat: 'part time',
        requirements: ['communication', 'Team player', 'Design thinking', 'Dev skill'],
        techStack: ['NestJS', 'Angular', 'MongoDB', 'TypeScript'],
        startDate: new Date('2023-05-01' ),
        endDate: new Date()
    },  {
        title: 'Software Developer',
        company: 'Robert Bosch GmbH',
        description: 'Well, the way they make shows is, they make one show. That show\'s called a pilot.  if they\'re going to make more shows.',
        locationFormat: 'remote',
        workFormat: 'part time',
        requirements: ['communication', 'Team player', 'Design thinking', 'Dev skill'],
        techStack: ['NestJS', 'Angular', 'MongoDB', 'TypeScript'],
        startDate: new Date('2023-05-01' ),
        endDate: new Date()
    },
]

const projects: ProjectType[] = [
    {
        title: 'MoneyBack',
        type: 'mobile',
        description: 'Mobile application for tracking daily expenses.',
        asset: 'mobile-app.png',
        technologies: ['Flutter', 'SQLite',],
        url: 'https://github.com/Brandel-T/flutter_expenses_app'
    },
    {
        title: 'MoneyBack',
        type: 'mobile',
        description: '',
        asset: 'mobile-app.png',
        technologies: ['Flutter', 'SQLite',],
        url: 'https://github.com/Brandel-T/flutter_expenses_app'
    },
    {
        title: 'MoneyBack',
        type: 'mobile',
        description: '',
        asset: 'mobile-app.png',
        technologies: ['Flutter', 'SQLite',],
        url: 'https://github.com/Brandel-T/flutter_expenses_app'
    },
]

const recentTechStack: string[] = ['NestJS', 'Angular', 'MongoDB', 'Flutter', 'Nuxt', 'SQLite']
const techStack: TechStackType[] = [
    {
        category: 'Backend',
        technologies: ['Java', 'C++', 'MongoDB', 'PostgresSQL', 'SQLite', 'NodeJS', 'Spring Boot', 'NestJS']
    }, {
        category: 'Frontend',
        technologies: ['Angular', 'Nuxt 3', 'Vue 3 / Composition API', 'TailwindCSS', '(S)CSS', 'Bootstrap']
    }, {
        category: 'Others',
        technologies: ['Linux', 'Windows', 'Mac', 'Bash/Shell Scripting', 'Docker',]
    }
]
</script>

<style lang="scss" scoped>
.app {
  overflow: hidden;
}
.hero-wrapper {
  overflow: hidden;
}
.hero-wrapper::after {
  content: '';
  width: 20rem;
  height: 20rem;
  border: 2px solid $primary;
  position: absolute;
  left: 50%;
  top: -45%;
  border-radius: 50%;
  background-color: $accent;
  filter: blur(400px);
  z-index: -1;
}
.hero-wrapper::before {
  content: '';
  width: 15rem;
  height: 5rem;
  border: 5rem solid $primary;
  position: absolute;
  left: -10%;
  top: 35%;
  border-radius: 50%;
  filter: blur(250px);
  z-index: -1;
}
</style>