const express = require("express");
const router = express.Router();

router.get("/doctors", (req, res) => {
  const bgUrl=req.protocol + '://' + req.get('host') + req.baseUrl + '/imgs/'
  res.status(200).json([
    {
      "id":1,
      "name":"Dr. Mekhala Sarkar",
      "img":bgUrl+'Dr.-Mekhala-Sarkar.jpg',
      "t1":"Mental Health Specialist & Psychiatrist",
      "t2":"Health and Hope Hospital",
      "t3":"Address: 152/2/G, Green Road, Panthapath, Dhaka - 1205",
      "t4":"Visiting Hour: 7pm to 9pm (Closed: Thu & Friday)",
      "predict":"high",
      "tips":"It is High suicide tendency. You need mental support."
    },
    {
      "id":2,
      "name":"Prof. Dr. M. A. Mohit Kamal",
      "img":bgUrl+"Prof.-Dr.-M.-A.-Mohit-Kamal.jpg",
      "t1":"Psychiatry (Mental Diseases) Specialist & Psychotherapist",
      "t2":"Labaid Specialized Hospital, Dhanmondi",
      "t3":"Address: House # 06, Road # 04, Dhanmondi, Dhaka - 1205",
      "t4":"Visiting Hour: 7pm to 10pm (Mon, Wed & Thu)",
      "predict":"high",
      "tips":"It is high suicide tendency. You need mental support."
    },
    { 
      "id":3,
      "name":"Prof. Dr. Md. Shah Alam",
      "img":bgUrl+"Prof.-Dr.-Md.-Shah-Alam.jpg",
      "t1":"Mental Diseases, Drug Addiction, Sexual Health Specialist & Psychotherapist",
      "t2":"Popular Diagnostic Center, Dhanmondi",
      "t3":"Address: 3046, O.R. Nizam Road, Golpahar, Panchlaish, Chattogram",
      "t4":"Visiting Hour: 10am to 12pm (Only Friday)",
      "predict":"medium",
      "tips":"It is medium suicide tendency. You something need mental support."
    },
    {
      "id":4,
      "name":"Prof. Md. Waziul Alam Chowdhury",
      "img":bgUrl+"Prof.-Md.-Waziul-Alam-Chowdhury.jpg",
      "t1":"Psychiatry & Mental Health Specialist",
      "t2":"Square Hospital, Dhaka",
      "t3":"Address: House # 17, Road # 08, Dhanmondi R/A, Dhaka – 1205",
      "t4":"Visiting Hour: 7pm to 9pm (Closed: Thursday & Friday)",
      "predict":"medium",
      "tips":"It is medium suicide tendency. You something need mental support."
    },
    {
      "id":5,
      "name":"Prof. Dr. Faruq Alam",
      "img":bgUrl+"Prof.-Dr.-Faruq-Alam.jpg",
      "t1":"Mental Diseases, Drug Addiction, Psychiatry & Child Psychiatry Specialist",
      "t2":"Khidmah Hospital, Dhaka",
      "t3":"Address: C-287/2-3 Khilgaon Bishwa Road, Khilgaon, Dhaka",
      "t4":"Visiting Hour: 4.30pm to 5.30pm (Only Thursday)",
      "predict":"low",
      "tips":"It is low suicide tendency. You no need mental support."
    },
    {
      "id":6,
      "name":"Dr. Ahsan Uddin Ahmed",
      "img":bgUrl+"Dr.-Ahsan-Uddin-Ahmed.jpg",
      "t1":"Psychiatrist & Psychotherapist",
      "t2":"BRB Hospital, Dhaka",
      "t3":"Address: 77/A, East Rajabazar, West Panthapath, Dhaka",
      "t4":"Visiting Hour: 4pm to 9.30pm (Closed: Mon & Friday)",
      "predict":"low",
      "tips":"It is low suicide tendency. You no need mental support."
    }
  ]
  )
});

module.exports=router;
