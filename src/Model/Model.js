


export const Client_detail =[
    {'name':'Client_id','type':'text'},
    {'name':'Name','type':'text'},
]



export const Freelancer_detail =[
    {'name':'Freelancer_id','type':'text'},
    {'name':'Name','type':'text'},
    {'name':'Freelancer_rating','type':'text'},
]


export const Freelancer_skill =[
    {'name':'FS_id','type':'text'},
    {'name':'Freelancer_id','type':'text'},
    {'name':'Skill_id','type':'text'},
    {'name':'Skill_rating','type':'text'},
    {'name':'Years_of_experience','type':'text'},

]

export const Skill_detail =[
    {'name':'Skill_id','type':'text'},
    {'name':'Skill_name','type':'text'},
]

// review table
export const Project_detail =[
    {'name':'Project_id','type':'text'},
    {'name':'Client_id','type':'text'},
    {'name':'Project_name','type':'text'},
    {'name':'Project_description','type':'text'},
    {'name':'Project_budget','type':'text'},
    {'name':'Project_deadline','type':'text'},
    {'name':'Project_status','type':'text'},
    {'name':'Project_Department','type':'text'}

]

export const Project_skill =[
    {'name':'PS_id','type':'text'},
    {'name':'Project_id','type':'text'},
    {'name':'Skill_id','type':'text'},
    {'name':'Skill_rating','type':'text'},
]


export const Profile_detail =[
    {'name':'Profile_id','type':'text'},
    {'name':'Freelancer_id','type':'text'},
    {'name':'Client_id','type':'text'},
    {'name':'description','type':'text'},
    {'name':'Gender','type':'text'},
    {'name':'Prfile_photo','type':'text'},
    {'name':'MobilePhone','type':'text'},
    {'name':'Email','type':'text'},
    {'name':'Address','type':'text'},

]


