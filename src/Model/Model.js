


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
    {'name':'project_id','type':'text'},
    {'name':'Client_id','type':'text'},
    {'name':'project_department_id','type':'text'},
    {'name':'Department_name','type':'text'},   /*3*/
    {'name':'project_title','type':'text'},
    {'name':'project_description','type':'text'},
    {'name':'project_details','type':'text'},
    {'name':'project_start_date','type':'text'}, 
    {'name':'project_deadline','type':'text'},
    {'name':'project_budget','type':'text'},
    {'name':'project_status','type':'text'},
    {'name':'No_of_openings','type':'text'},
    {'name':'project_department_name','type':'text'},
    {'name':'project_skills','type':'text'},
    {'name':'project_state','type':'text'}

  
]

export const Project_skill =[
    {'name':'PS_id','type':'text'},
    {'name':'Project_id','type':'text'},
    {'name':'Skill_id','type':'text'},
    {'name':'Skill_rating','type':'text'},
]


export const Profile_detail =[
    {'name':'profile_id','type':'text'},
    {'name':'name','type':'text'},
    {'name':'email','type':'text'},
    {'name':'mobilePhone','type':'text'},
    {'name':'profile_role','type':'text'},
    {'name':'gender','type':'text'},
    {'name':'address','type':'text'},
    {'name':'profile_created','type':'text'},
    {'name':'profile_photo','type':'text'},
    {'name':'profile_updated','type':'text'},
    {'name': "is_deletd", 'type':'text'},
]




export  const admin_request =[
   {'name': "requester_id", 'type':'text'},
   {'name': "requester_name", 'type':'text'},
   {'name': "requester_Email", 'type':'text'},
   {'name': "requester_priority", 'type':'text'},
   {'name': "request_status", 'type':'text'},
   {'name': "request_access", 'type':'text'},
   {'name': "request_created", 'type':'text'},
   {'name': "requester_description", 'type':'text'},
   {'name': "aR_id", 'type':'text'},
   {'name': "request_updated", 'type':'text'},
   {'name': "requester_image", 'type':'text'},
 
  
]

