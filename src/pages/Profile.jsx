import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Trophy, 
  Target,
  TrendingUp,
  Edit,
  Settings
} from 'lucide-react'

export default function Profile() {
  const userProfile = {
    name: 'John Doe',
    email: 'admin@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    joinDate: '2024-01-15',
    position: 'Administrator',
    company: 'Acme Corp',
    bio: 'Experienced administrator with a passion for data-driven decision making and customer success.',
    stats: {
      totalCustomers: 247,
      activeProjects: 12,
      completedTasks: 156,
      teamSize: 8
    },
    achievements: [
      { id: 1, title: 'Customer Champion', description: 'Achieved 95% customer satisfaction', icon: Trophy },
      { id: 2, title: 'Data Expert', description: 'Processed 10,000+ customer records', icon: Target },
      { id: 3, title: 'Growth Leader', description: 'Led 25% customer base growth', icon: TrendingUp },
    ],
    skills: [
      { name: 'Customer Management', progress: 90 },
      { name: 'Data Analysis', progress: 85 },
      { name: 'Team Leadership', progress: 88 },
      { name: 'Project Management', progress: 82 },
    ]
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center">
          <User className="h-8 w-8 mr-3 text-primary" />
          Profile
        </h1>
        <p className="text-muted-foreground">
          View and manage your personal profile information
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <Card className="lg:col-span-1 bg-gradient-card border-0 shadow-soft">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="" alt={userProfile.name} />
                <AvatarFallback className="bg-primary/10 text-primary font-bold text-2xl">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
            <CardTitle className="text-xl">{userProfile.name}</CardTitle>
            <CardDescription>{userProfile.position} at {userProfile.company}</CardDescription>
            <div className="flex justify-center space-x-2 mt-4">
              <Button size="sm" className="bg-gradient-primary">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <Separator />
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{userProfile.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{userProfile.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{userProfile.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Joined {new Date(userProfile.joinDate).toLocaleDateString()}</span>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-medium text-foreground mb-2">About</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {userProfile.bio}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Stats and Skills */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gradient-card border-0 shadow-soft text-center p-4">
              <div className="text-2xl font-bold text-primary">{userProfile.stats.totalCustomers}</div>
              <div className="text-sm text-muted-foreground">Total Customers</div>
            </Card>
            <Card className="bg-gradient-card border-0 shadow-soft text-center p-4">
              <div className="text-2xl font-bold text-primary">{userProfile.stats.activeProjects}</div>
              <div className="text-sm text-muted-foreground">Active Projects</div>
            </Card>
            <Card className="bg-gradient-card border-0 shadow-soft text-center p-4">
              <div className="text-2xl font-bold text-primary">{userProfile.stats.completedTasks}</div>
              <div className="text-sm text-muted-foreground">Completed Tasks</div>
            </Card>
            <Card className="bg-gradient-card border-0 shadow-soft text-center p-4">
              <div className="text-2xl font-bold text-primary">{userProfile.stats.teamSize}</div>
              <div className="text-sm text-muted-foreground">Team Size</div>
            </Card>
          </div>

          {/* Skills */}
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader>
              <CardTitle>Skills & Expertise</CardTitle>
              <CardDescription>Your professional skills and competencies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userProfile.skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.progress}%</span>
                    </div>
                    <Progress value={skill.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card className="bg-gradient-card border-0 shadow-soft">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
              <CardDescription>Your accomplishments and milestones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userProfile.achievements.map((achievement) => (
                  <div key={achievement.id} className="flex items-start space-x-3 p-4 rounded-lg bg-background/50 border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground text-sm">{achievement.title}</h4>
                      <p className="text-xs text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Activity Timeline */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest actions and achievements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: 'Updated customer profile for Alice Johnson', time: '2 hours ago', type: 'edit' },
              { action: 'Completed quarterly report analysis', time: '1 day ago', type: 'complete' },
              { action: 'Added 15 new customers to the system', time: '3 days ago', type: 'add' },
              { action: 'Led team meeting on Q1 objectives', time: '1 week ago', type: 'meeting' },
            ].map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium text-foreground">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}