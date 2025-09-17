"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, Zap, Shield, Users, ArrowRight, Loader2 } from "lucide-react"
import { toast } from "sonner"

export default function WaitlistLanding() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error("Please enter your email address")
      return
    }

    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    setIsSubmitted(true)
    toast.success("Welcome to the waitlist! We'll be in touch soon.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8 relative">
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
               `,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="relative z-10">
          <div className="flex items-center justify-center mb-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Pitch Perfect AI</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Coming Soon
            </Badge>

            <h1 className="text-6xl md:text-6xl font-bold text-balance px-0 mb-6 text-center">
              We can't make investors say yes, {" "}
              <span className="text-blue-500">but we know exactly why they say no.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl mx-auto">
              {"The fundraising intelligence system for pre-seed founders that diagnoses why investors ghost you, without wasting months in dead-end meetings, so you can fix what matters and close your round faster."}                                          
            </p>

            {/* Product Overview */}
            

            {/* Product Visual */}
            <div className="relative mb-16">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border">
                <div className="bg-card rounded-lg shadow-2xl overflow-hidden">
                  <div className="bg-muted/50 p-4 border-b flex items-center space-x-2">
                    <div className="w-3 h-3 bg-destructive rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="h-4 bg-muted rounded"></div>
                      <div className="h-4 bg-primary/20 rounded"></div>
                      <div className="h-4 bg-muted rounded"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-8 bg-primary/10 rounded"></div>
                      <div className="h-6 bg-muted rounded w-3/4"></div>
                      <div className="h-6 bg-muted rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Lightning Fast Setup</h3>
                  <p className="text-sm text-muted-foreground">
                    Get your entire team onboarded in under 5 minutes with our intelligent workspace builder
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Enterprise Security</h3>
                  <p className="text-sm text-muted-foreground">
                    Bank-level encryption and compliance standards that scale from startup to enterprise
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Smart Collaboration</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-powered insights that help your team work smarter, not harder
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Waitlist Incentive */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-primary mr-2" />
                <span className="font-semibold text-primary">Early Access Benefits</span>
              </div>
              <p className="text-lg mb-4">
                Join our waitlist and get <strong>3 months free</strong> when we launch, plus exclusive beta access
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>✓ Priority onboarding</span>
                <span>✓ Direct founder access</span>
                <span>✓ Shape the product roadmap</span>
              </div>
            </div>

            {/* Signup Form */}
            <div className="max-w-md mx-auto">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1"
                      disabled={isLoading}
                    />
                    <Button type="submit" disabled={isLoading} className="sm:w-auto w-full">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          Join Waitlist
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">No spam, ever. Unsubscribe with one click.</p>
                </form>
              ) : (
                <div className="text-center p-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">You're on the list!</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    We'll send you updates as we get closer to launch.
                  </p>
                </div>
              )}
            </div>

            {/* Social Proof */}
            <div className="mt-16 pt-8 border-t">
              <p className="text-sm text-muted-foreground mb-4">Trusted by teams at</p>
              <div className="flex items-center justify-center space-x-8 opacity-60">
                <div className="text-lg font-semibold">TechCorp</div>
                <div className="text-lg font-semibold">InnovateLab</div>
                <div className="text-lg font-semibold">GrowthCo</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 FlowSync. All rights reserved.</p>
      </footer>
    </div>
  )
}
