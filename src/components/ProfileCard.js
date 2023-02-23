import React, { Component } from 'react';
import { Color } from 'react-bootstrap/esm/types';

export const ProfileCard = [
    {
        id: 0,
        color: "accent",
        name: "Naeem Hameed",
        designation: "M.B.B.S, F.C.P.S (Cardiology), F.C.P.S Interventional Cardiology (R) Consultant cardiologist",
        institue: "Faisalabad Institute of Cardiology",
        phone: "03215985482",
        phoneLink: "callto:+923215985482",
        email: "dr_naeem80@hotmail.com",
        oladoc: "https://oladoc.com/pakistan/faisalabad/dr/cardiologist/naeem-hameed/428550",
        clinics: [
            {
                id: 0,
                name: "Faisal Hospital, Faisalabad",
                fee: "1500",
                location: "673-A Lower Canal Rd E, Block A People's Colony No 1, Faisalabad, Punjab",
                day: "Monday - Saturday",
                time: "6:00 PM - 08:00 PM",
                direction: "https://www.google.com/maps/dir//31.4160661,73.1024114/@31.4160494,73.0323712,12z"
            },
            {
                id: 1,
                name: "Chughtai Medical Centre, Styana Road",
                fee: "1000",
                location: "571-B Satayana Rd, D Ground Block B People's Colony No 1, Faisalabad, Punjab",
                day: "Thursday and Saturday",
                time: "04:00 PM - 05:30 PM",
                direction: "https://www.google.com/maps?travelmode=driving&daddr=31.40588300,73.10158004"
            }
        ]
    },
    {
        id: 1,
        color: "primary",
        name: "Sidra Mushtaq",
        designation: "M.B.B.S, F.C.P.S (Gynae & Obstetrics)",
        institue: "Faisalabad Institute of Cardiology",
        phone: "03107468313",
        phoneLink: "callto:+923107468313",
        email: "sidramushtaq229@yahoo.com",
        oladoc: "https://oladoc.com/pakistan/faisalabad/dr/gynecologist/sidra-mushtaq-gynecologist/1038739",
        clinics: [
            {
                id: 0,
                name: "Professors Hospital, Faisalabad",
                fee: "1000",
                location: "Satayana Rd, Batala Colony Faisalabad, Punjab",
                day: "Monday and Thursday",
                time: "09:30 AM - 12:00 PM",
                direction: "https://www.google.com/maps/dir//Professors+Hospital,+Professors+Hospital+,+719,+Satayana+Rd,+opposite+McDonald,+Batala+Colony+Faisalabad,+Punjab,+Pakistan/@31.4029729,73.1038,21z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3922696ef8784c19:0xd4236b9864589aa4!2m2!1d73.1038316!2d31.4029881!3e0"
            }
        ]
    }
]