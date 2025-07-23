import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Users, TrendingUp, ShoppingCart, DollarSign, Activity, Calendar } from 'lucide-react'

const stats = [
  {
    title: "Total Customers",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    trend: "up"
  },
  {
    title: "Revenue",
    value: "$45,231",
    change: "+8.2%",
    icon: DollarSign,
    trend: "up"
  },
  {
    title: "Orders",
    value: "1,423",
    change: "+3.1%",
    icon: ShoppingCart,
    trend: "up"
  },
  {
    title: "Growth Rate",
    value: "24.8%",
    change: "+2.4%",
    icon: TrendingUp,
    trend: "up"
  }
]

const recentActivity = [
  { id: 1, action: "New customer registered", user: "John Doe", time: "2 minutes ago" },
  { id: 2, action: "Order completed", user: "Jane Smith", time: "5 minutes ago" },
  { id: 3, action: "Payment received", user: "Mike Johnson", time: "12 minutes ago" },
  { id: 4, action: "Profile updated", user: "Sarah Wilson", time: "1 hour ago" },
]

export default function Dashboard() {
  const userEmail = localStorage.getItem('userEmail') || 'admin@example.com'

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {userEmail}! Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="flex items-center space-x-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {stat.change}
                </Badge>
                <p className="text-xs text-muted-foreground">from last month</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Monthly Progress */}
        <Card className="lg:col-span-2 bg-gradient-card border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>Monthly Progress</span>
            </CardTitle>
            <CardDescription>
              Your performance metrics for this month
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Sales Target</span>
                <span className="font-medium">68% completed</span>
              </div>
              <Progress value={68} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Customer Acquisition</span>
                <span className="font-medium">82% completed</span>
              </div>
              <Progress value={82} className="h-2" />
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Revenue Goal</span>
                <span className="font-medium">45% completed</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gradient-card border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-primary" />
              <span>Recent Activity</span>
            </CardTitle>
            <CardDescription>Latest updates from your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium text-foreground">
                      {activity.action}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {activity.user} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-primary" />
            <span>Quick Actions</span>
          </CardTitle>
          <CardDescription>Frequently used actions and shortcuts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border border-border bg-background/50 hover:bg-accent/50 transition-colors cursor-pointer">
              <h3 className="font-medium text-foreground">Add Customer</h3>
              <p className="text-sm text-muted-foreground mt-1">Create a new customer profile</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-background/50 hover:bg-accent/50 transition-colors cursor-pointer">
              <h3 className="font-medium text-foreground">Generate Report</h3>
              <p className="text-sm text-muted-foreground mt-1">Create analytics reports</p>
            </div>
            <div className="p-4 rounded-lg border border-border bg-background/50 hover:bg-accent/50 transition-colors cursor-pointer">
              <h3 className="font-medium text-foreground">View Analytics</h3>
              <p className="text-sm text-muted-foreground mt-1">Check detailed insights</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}