import React from "react";
import pythonIcon from "../assets/icons/python-light.svg";
import javaIcon from "../assets/icons/java-light.svg";
import cppIcon from "../assets/icons/cpp.svg";
import jsIcon from "../assets/icons/javascript.svg";
import goIcon from "../assets/icons/golang.svg";
import bashIcon from "../assets/icons/bash-light.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import reactIcon from "../assets/icons/react-light.svg";
import viteIcon from "../assets/icons/vite-light.svg";
import nodeIcon from "../assets/icons/nodejs-light.svg";
import djangoIcon from "../assets/icons/django.svg";
import fastapiIcon from "../assets/icons/fastapi.svg";
import flaskIcon from "../assets/icons/flask-light.svg";
import mysqlIcon from "../assets/icons/mysql-light.svg";
import postgresIcon from "../assets/icons/postgresql-light.svg";
import mongoIcon from "../assets/icons/mongodb.svg";
import dockerIcon from "../assets/icons/docker.svg";
import gitIcon from "../assets/icons/git.svg";
import postmanIcon from "../assets/icons/postman.svg";
import figmaIcon from "../assets/icons/figma-light.svg";
import azureIcon from "../assets/icons/azure-light.svg";
import flutterIcon from "../assets/icons/flutter-light.svg";
import githubIcon from "../assets/icons/github-light.svg";
import gitlabIcon from "../assets/icons/gitlab-light.svg";
import pytorchIcon from "../assets/icons/pytorch-light.svg";
import tensorflowIcon from "../assets/icons/tensorflow-light.svg";
import tailwindcssIcon from "../assets/icons/tailwindcss-light.svg";
import opencvIcon from "../assets/icons/opencv-light.svg";
import neovimIcon from "../assets/icons/neovim-light.svg";
import linuxIcon from "../assets/icons/linux-light.svg";
import vimIcon from "../assets/icons/vim-light.svg";

export default function Skills() {
  const skills = [
    { name: "Python", Icon: pythonIcon },
    { name: "Java", Icon: javaIcon },
    { name: "C++", Icon: cppIcon },
    { name: "JavaScript", Icon: jsIcon },
    { name: "Go", Icon: goIcon },
    { name: "Bash", Icon: bashIcon },
    { name: "Linux", Icon: linuxIcon },
    { name: "Vim", Icon: vimIcon },
    { name: "Neovim", Icon: neovimIcon },
    { name: "HTML", Icon: htmlIcon },
    { name: "CSS", Icon: cssIcon },
    { name: "React", Icon: reactIcon },
    { name: "Vite", Icon: viteIcon },
    { name: "Node.js", Icon: nodeIcon },
    { name: "Django", Icon: djangoIcon },
    { name: "FastAPI", Icon: fastapiIcon },
    { name: "Flask", Icon: flaskIcon },
    { name: "MySQL", Icon: mysqlIcon },
    { name: "PostgreSQL", Icon: postgresIcon },
    { name: "MongoDB", Icon: mongoIcon },
    { name: "Docker", Icon: dockerIcon },
    { name: "Git", Icon: gitIcon },
    { name: "GitHub", Icon: githubIcon },
    { name: "GitLab", Icon: gitlabIcon },
    { name: "Postman", Icon: postmanIcon },
    { name: "Azure", Icon: azureIcon },
    { name: "Flutter", Icon: flutterIcon },
    { name: "Tailwind CSS", Icon: tailwindcssIcon },
    { name: "TensorFlow", Icon: tensorflowIcon },
    { name: "PyTorch", Icon: pytorchIcon },
    { name: "OpenCV", Icon: opencvIcon },
    { name: "Figma", Icon: figmaIcon },
  ];

  return (
    <div className="min-h-screen bg-(--color-light) p-8">
      <div className="max-w-6xl mx-auto">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-(--color-green) mb-8">
            Skills
          </h1>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#f4f2ed] rounded-xl px-4 py-8 flex flex-col items-center justify-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-5 border border-(--color-blue)/10 w-full"
              >
                <img
                  src={skill.Icon}
                  alt={skill.name}
                  className="w-14 h-14 object-contain"
                />
                <span className="text-xs font-medium text-(--color-dark) text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
