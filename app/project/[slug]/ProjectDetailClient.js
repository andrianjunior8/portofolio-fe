"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, XCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ProjectDetailClient({ project }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.screenshots.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) =>
        (prev - 1 + project.screenshots.length) % project.screenshots.length
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-8 relative z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pb-12 relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-gray-400 mb-6">{project.subtitle}</p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-800/50 rounded-full text-sm font-medium border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
              >
                <ExternalLink size={20} />
                View Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <h2 className="text-3xl font-bold mb-8">Application Screenshots</h2>

        <div className="relative">
          {/* Main Screenshot */}
          <div className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden mb-4">
            <Image
              src={project.screenshots[currentImage].url}
              alt={project.screenshots[currentImage].alt}
              fill
              className="object-cover"
            />

            {/* Navigation Arrows */}
            {project.screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                  aria-label="Previous screenshot"
                >
                  <ArrowLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full transition-all"
                  aria-label="Next screenshot"
                >
                  <ArrowLeft size={24} className="rotate-180" />
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          <p className="text-center text-gray-400 mb-6">
            {project.screenshots[currentImage].caption}
          </p>

          {/* Thumbnail Navigation */}
          {project.screenshots.length > 1 && (
            <div className="flex gap-4 justify-center">
              {project.screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImage
                      ? "border-blue-500 scale-110"
                      : "border-gray-700 opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={screenshot.url}
                    alt={screenshot.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Description */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <h2 className="text-3xl font-bold mb-4">About This Project</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle
                  size={18}
                  className="text-green-400 flex-shrink-0"
                />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths & Weaknesses */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Keunggulan */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle className="text-green-400" size={32} />
              Strengths
            </h2>
            <div className="space-y-4">
              {project.strengths.map((strength, index) => (
                <div
                  key={index}
                  className="bg-green-500/10 border border-green-500/30 rounded-xl p-5 hover:border-green-500/50 transition-all"
                >
                  <h3 className="text-xl font-semibold text-green-400 mb-2">
                    {strength.title}
                  </h3>
                  <p className="text-gray-300">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kekurangan */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <XCircle className="text-red-400" size={32} />
              Weaknesses
            </h2>
            <div className="space-y-4">
              {project.weaknesses.map((weakness, index) => (
                <div
                  key={index}
                  className="bg-red-500/10 border border-red-500/30 rounded-xl p-5 hover:border-red-500/50 transition-all"
                >
                  <h3 className="text-xl font-semibold text-red-400 mb-2">
                    {weakness.title}
                  </h3>
                  <p className="text-gray-300">{weakness.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in This Project?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            {`Let's discuss how I can help build something similar for you`}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="px-8 py-3 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2024 Andrian Junior. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
