import React from "react";
import Navbar from "../components/Navbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BarChart4,
  BookOpen,
  Clock,
  Users,
} from "lucide-react";
import Footer from "../components/Footer";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
    <div className="rounded-full bg-[hsl(210,100%,50%)]/10 p-3 mb-4">
      <Icon className="h-6 w-6 text-[hsl(210,100%,50%)]" />
    </div>
    <h3 className="text-xl font-medium mb-2">{title}</h3>
    <p className="text-center text-muted-foreground">{description}</p>
  </div>
);

const Hero = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <section className="pt-20 pb-12 md:pt-24 md:pb-16 overflow-hidden">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Left Section */}
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-slide-down">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(210,100%,50%)] to-blue-700">
                    Master Your Knowledge
                  </span>
                  <br />
                  <span>With Interactive Quizzes</span>
                </h1>

                <p className="text-xl text-gray-500 max-w-2xl mx-auto lg:mx-0 animate-slide-down delay-150">
                  Test your understanding, track your progress, and challenge
                  yourself with our comprehensive quiz platform designed for
                  continuous learning.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-slide-down delay-300">
                  <Button
                    variant="contained"
                    component={Link}
                    to="/register"
                    onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
                    className="h-12 px-8"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => scrollTo({top:0, behavior:'smooth'})}
                    component={Link}
                    to="/login"
                    sx={{ height: "3rem", px: "2rem", color: "black" }}
                  >
                    Login
                  </Button>
                </div>
              </div>

              {/* Right Section - Quiz UI */}
              <div className="flex-1 relative animate-slide-up">
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,100%,50%)]/20 to-blue-500/20 rounded-3xl blur-3xl opacity-30 transform -rotate-6"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-lg font-medium">Physics Quiz</h3>
                      <span className="pill bg-blue-100 text-blue-800">
                        Question 3/10
                      </span>
                    </div>
                    <div className="bg-secondary/50 rounded-xl p-4">
                      <p className="font-medium">
                        What is the SI unit of force?
                      </p>
                    </div>
                    <div className="space-y-3">
                      {["Newton", "Joule", "Watt", "Pascal"].map(
                        (option, i) => (
                          <div
                            key={option}
                            className={`p-3 rounded-lg border ${
                              i === 0
                                ? "border-[hsl(210,100%,50%)] bg-[hsl(210,100%,50%)]/5"
                                : "border-border bg-white"
                            } cursor-pointer transition-colors hover:bg-secondary/50`}
                          >
                            {option}
                          </div>
                        )
                      )}
                    </div>

                    <div className="pt-4 flex justify-between items-center">
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm">01:45 remaining</span>
                      </div>
                      <Button>Next Question</Button>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Quiz UI */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need for Effective Learning
              </h2>
              <p className="text-xl text-muted-foreground">
                Our platform combines powerful features to help you excel in
                your studies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={BookOpen}
                title="Diverse Subject Library"
                description="Access quizzes across various subjects and disciplines to broaden your knowledge."
              />
              <FeatureCard
                icon={BarChart4}
                title="Performance Analytics"
                description="Track your progress with detailed reports and visualizations of your quiz results."
              />
              <FeatureCard
                icon={Clock}
                title="Timed Assessments"
                description="Practice under exam-like conditions with customizable time limits for each quiz."
              />
              <FeatureCard
                icon={Users}
                title="User Management"
                description="Administrators can easily manage users, subjects, and quiz content."
              />
              <FeatureCard
                icon={Award}
                title="Achievement System"
                description="Earn badges and track accomplishments as you complete quizzes successfully."
              />
              <FeatureCard
                icon={ArrowRight}
                title="Continuous Learning"
                description="Revisit completed quizzes and review your answers to reinforce learning."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-screen-xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-[hsl(210,100%,50%)]/10 to-blue-500/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Test Your Knowledge?
                </h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
                  Join thousands of students who are already improving their
                  skills with our interactive quizzes.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    variant="contained"
                    component={Link}
                    to="/register"
                    sx={{ height: "3rem", px: "2rem", color: "white" }}
                  >
                    Create Free Account
                  </Button>

                  <Button
                    variant="outlined"
                    component={Link}
                    to="/login"
                    sx={{ height: "3rem", px: "2rem", color: "black" }}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Hero;
