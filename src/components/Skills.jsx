import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";
import { DiLaravel } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiGit } from "react-icons/di";

export default function Skills() {
    return (
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 p-8 md:p-12 justify-items-center content-center">

          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-orange-600">
                <DiHtml5 size={200} />
                <p className="font-bold text-center p-2">HTML5</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-blue-600">
                <DiCss3 size={200} />
                <p className="font-bold text-center p-2">CSS3</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-yellow-500">
                <DiJsBadge size={200} />
                <p className="font-bold text-center p-2">JavaScript</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-cyan-500">
                <DiReact size={200} />
                <p className="font-bold text-center p-2">React</p>
          </div>

          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-green-600">
                <DiNodejsSmall size={200} />
                <p className="font-bold text-center p-2">NodeJS</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-red-500">
                <DiLaravel size={200} />
                <p className="font-bold text-center p-2">Laravel</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-cyan-500">
                <DiMysql size={200} />
                <p className="font-bold text-center p-2">MySQL</p>
          </div>
          <div className="border rounded-md shadow-md bg-slate-100 transition text-slate-900 transform hover:-translate-y-2 focus:-translate-y-2 active:-translate-y-2 hover:text-red-500">
                <DiGit size={200} />
                <p className="font-bold text-center p-2">Git</p>
          </div>
      </div>
    );
}