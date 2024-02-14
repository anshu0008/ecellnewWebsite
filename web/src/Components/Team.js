import React from "react";
import "../App.css";
import { teams } from "../Constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedinIn, faXTwitter} from  '@fortawesome/free-brands-svg-icons'


function Team() {
  return (
    <section className="w-full h-auto mx-auto py-20 bg-primary flex items-center flex-col">
      <div className=" mt-[-36px] lg:mt-[-46px] relative h-96 w-screen flex  justify-center  ">
        <img
          className="object-cover"
          src="http://localhost:3000/static/media/c1.a34717e35ffbd1013562.webp"
          alt=""
        />
      </div>
      <div className="m-2 z-40 ">
         <span class=" bg-gradient-to-r from-slate-800 to-slate-600  text-blue-800 text-3xl  font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-transperent dark:text-blue-100 ">Faculty Advisors</span>
      </div>
      <div className="flex flex-wrap mt-[-14px] justify-center items-center mb-14 gap-7 p-10 glass ">
        {teams.FactAdv.map((team, index) => (
          <div class="wrapper m-4 mt-24 mb-28">
            <div class="img-area">
              <div class="inner-area bg-slate-100">
                <img src={team.url} alt="" />
              </div>
            </div>
            <div class="effect"></div>
            <div class="name">{team.name}</div>
            <div class="secname">{team.name}</div>
            <div class="about">{team.designation}</div>
            <div class="social-icons">
            <a href="#" className=" XTwitter flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faXTwitter}/></div>
              </a>
              <a href="#" className="Facebook flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faFacebook}/></div>
              </a>
              <a href="#" className="Linkedin flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faLinkedinIn}/></div>
              </a>
              <a href="#" className="Instagram flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faInstagram}/></div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Leads */}

      <div className="m-2 z-40">
         <span class=" bg-gradient-to-r  from-slate-800 to-slate-600  text-blue-800 text-3xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-transperent dark:text-blue-100 ">Leads</span>
      </div>
      <div className="flex  mt-[-14px] flex-wrap justify-center items-center gap-7 mx-7 py-10 glass">
        {teams.lead.map((team, index) => (
          <div class="wrapper m-4 mt-24 mb-28">
            <div class="img-area">
              <div class="inner-area bg-slate-100">
                <img src={team.url} alt="" />
              </div>
            </div>
            <div class="effect"></div>
            <div class="name">{team.name}</div>
            <div class="secname">{team.name}</div>
            <div class="about">{team.designation}</div>
            <div class="social-icons">
            <a href="#" className=" XTwitter flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faXTwitter}/></div>
              </a>
              <a href="#" className="Facebook flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faFacebook}/></div>
              </a>
              <a href="#" className="Linkedin flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faLinkedinIn}/></div>
              </a>
              <a href="#" className="Instagram flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faInstagram}/></div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* members */}
      <div className="m-2 z-40 mt-16">
         <span class=" bg-gradient-to-r  from-slate-800 to-slate-600  text-blue-800 text-3xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-transperent dark:text-blue-100 ">Domain Leads</span>
      </div>
      <div className="flex flex-wrap mt-[-14px] justify-center items-center mx-7 gap-7 py-10 glass ">
        {teams.member.map((team, index) => (
          <div class="wrapper m-4 mt-24 mb-28">
            <div class="img-area">
              <div class="inner-area bg-slate-100">
                <img src={team.url} alt="" />
              </div>
            </div>
            <div class="effect"></div>
            <div class="name">{team.name}</div>
            <div class="secname">{team.name}</div>
            <div class="about">{team.designation}</div>
            <div class="social-icons">
            <a href="#" className=" XTwitter flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faXTwitter}/></div>
              </a>
              <a href="#" className="Facebook flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faFacebook}/></div>
              </a>
              <a href="#" className="Linkedin flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faLinkedinIn}/></div>
              </a>
              <a href="#" className="Instagram flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faInstagram}/></div>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* jmember */}
      <div className="m-2 z-40 mt-16">
         <span class=" bg-gradient-to-r  from-slate-800 to-slate-600  text-blue-800 text-3xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-transperent dark:text-blue-100 ">Core Members</span>
      </div>
      <div className="flex flex-wrap mt-[-14px] justify-center items-center mx-7 gap-7 py-10 glass">
        {teams.Jmember.map((team, index) => (
          <div class="wrapper m-4 mt-24 mb-28 ">
            <div class="img-area">
              <div class="inner-area bg-slate-100">
                <img src={team.url} alt="" />
              </div>
            </div>
            <div class="effect"></div>
            <div class="name">{team.name}</div>
            <div class="secname">{team.name}</div>
            <div class="about">{team.designation}</div>
            <div class="social-icons">
            <a href="#" className=" XTwitter flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faXTwitter}/></div>
              </a>
              <a href="#" className="Facebook flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faFacebook}/></div>
              </a>
              <a href="#" className="Linkedin flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faLinkedinIn}/></div>
              </a>
              <a href="#" className="Instagram flex justify-center items-center text-2xl">
                <div className="z-40 flex justify-center items-center text-zinc-100 iconbeat "><FontAwesomeIcon icon={faInstagram}/></div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
