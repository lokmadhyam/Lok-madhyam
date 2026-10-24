import React, { useState } from "react";
import {
  Eye,
  Target,
  Award,
  ShieldCheck,
  Landmark,
  Copy,
  Check,
  CheckCircle2,
  BarChart3,
  ExternalLink,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
} from "recharts";
import { FINANCIAL_CHART_DATA, IMPACT_CHART_DATA } from "../data/orgData";
import { copyTextToClipboard } from "../utils/clipboard";

interface AnnualReportProps {
  openActionModal: (type?: string) => void;
}

export const AnnualReport: React.FC<AnnualReportProps> = ({
  openActionModal,
}) => {
  const [activeChartTab, setActiveChartTab] = useState<"impact" | "finance">(
    "impact",
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    copyTextToClipboard(text, () => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  return (
    <section
      id="report-section"
      className="py-20 bg-gray-50 border-t-4 border-orange-500"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <span className="bg-blue-100 text-blue-900 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            Verified Statutory & Program Report
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mt-4 mb-4 uppercase tracking-wide">
            Annual Report (2025–2026)
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6 rounded-full"></div>
          <h3 className="text-xl md:text-2xl font-bold text-orange-600">
            Name of the Organization: LOK MADHYAM
          </h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Registered Office: Village & Post Bhaiswan, Masaurhi, Patna (Bihar).
            PIN: 804452 <br />
            Email: lokmadhyam2004@gmail.com | Telephone: 9471090183, 9472090184{" "}
            <br />
            Contact Person: <strong>Pramila Kumari (Secretary)</strong>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-900 hover:shadow-md transition-shadow">
            <h4 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-blue-50 text-blue-900">
                <Eye className="w-6 h-6" />
              </span>
              <span>Vision</span>
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Lok Madhyam dreams to have equal rights for every person and live
              with dignity without any fear or discrimination—whether gender,
              caste, religion, regional, or color. Every person in the world
              would be able to access entitlement and justice equally.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-orange-500 hover:shadow-md transition-shadow">
            <h4 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-3">
              <span className="p-2.5 rounded-xl bg-orange-50 text-orange-600">
                <Target className="w-6 h-6" />
              </span>
              <span>Mission</span>
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Capacitate the socially excluded women and children who are in
              difficult circumstances and develop an enabled protective
              environment where women and children grow in the community to
              access their rights and live with full dignity.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-14 border border-gray-200">
          <div className="bg-blue-900 text-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-orange-400 font-bold">
                  Flagship Initiative (2025–2026)
                </span>
                <h4 className="text-xl md:text-2xl font-bold mt-1">
                  Key Project: Empowering Adolescent Girls in the Minority
                  Community of Masaurhi Block, Patna District
                </h4>
                <p className="text-blue-100 mt-2 text-sm md:text-base">
                  Awareness on Health, Hygiene (Menstrual Cycle), Quality
                  Education, and Voting Rights.
                </p>
              </div>
              <button
                type="button"
                onClick={() => openActionModal("volunteer")}
                className="self-start md:self-center shrink-0 bg-orange-600 hover:bg-orange-500 text-white text-sm font-bold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
              >
                Partner With Us
              </button>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              The project focused on strengthening leadership qualities,
              promoting health and nutrition awareness, educating girls about
              voting rights, and encouraging parents to support girls in making
              independent decisions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100">
                <div className="text-orange-600 font-extrabold text-3xl mb-1">
                  200
                </div>
                <div className="text-blue-950 font-semibold text-sm">
                  Adolescent girls selected for the leadership & life-skills
                  program
                </div>
              </div>
              <div className="bg-orange-50/60 p-5 rounded-xl border border-orange-100">
                <div className="text-orange-600 font-extrabold text-3xl mb-1">
                  443
                </div>
                <div className="text-blue-950 font-semibold text-sm">
                  Participants attended across 15 mother-engagement meetings
                </div>
              </div>
              <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100">
                <div className="text-orange-600 font-extrabold text-3xl mb-1">
                  50
                </div>
                <div className="text-blue-950 font-semibold text-sm">
                  Girls trained in sewing and stitching livelihood skills
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h5 className="font-bold text-blue-900 mb-3 flex items-center gap-2 text-lg">
                <Award className="w-5 h-5 text-orange-600" />
                <span>Greatest Achievements (2025–2026):</span>
              </h5>
              <ul className="space-y-2.5 text-gray-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>School Re-Enrollment:</strong> Seven girls from
                    Scheduled Caste families and ten minority girls have
                    enrolled in school after receiving counselling and
                    motivation through the project.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Academic Milestones:</strong> A total of 20 girls
                    successfully passed their matriculation examinations, and 10
                    girls applied in Class 11 for continuing their education.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Rights & Digital Safety:</strong> Noticeable
                    improvement in confidence levels, digital safety awareness,
                    and understanding of personal rights among adolescent girls.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-100">
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-blue-900 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-orange-600" />
                <span>
                  Interactive Analytics: 2025–2026 Impact
                </span>
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Visualizing verified metrics from the Lok Madhyam 2025–2026
                Annual Report
              </p>
            </div>
            <div className="inline-flex rounded-lg bg-gray-100 p-1 self-start">
              <button
                type="button"
                onClick={() => setActiveChartTab("impact")}
                className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-colors cursor-pointer ${activeChartTab === "impact" ? "bg-blue-900 text-white shadow-sm" : "text-gray-700 hover:text-blue-900"}`}
              >
                Program Outreach
              </button>

              {/*  Financial Overview Button */}
              {/* <button
                type="button"
                onClick={() => setActiveChartTab("finance")}
                className={`px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-bold transition-colors cursor-pointer ${activeChartTab === "finance" ? "bg-orange-600 text-white shadow-sm" : "text-gray-700 hover:text-orange-600"}`}
              >
                Financial Overview (₹)
              </button> */}
            </div>
          </div>

          {activeChartTab === "impact" ? (
            <div>
              <div className="relative h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={IMPACT_CHART_DATA}
                    margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="metric"
                      tick={{ fontSize: 11, fill: "#1e3a8a" }}
                      interval={0}
                      angle={-10}
                      textAnchor="end"
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#4b5563" }} />
                    <Tooltip
                      formatter={(value) => [
                        `${value} Beneficiaries`,
                        "Verified Count",
                      ]}
                      contentStyle={{
                        borderRadius: "8px",
                        borderColor: "#fed7aa",
                      }}
                    />
                    <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                      {IMPACT_CHART_DATA.map((entry, idx) => (
                        <Cell key={`cell-${idx}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">
                Masaurhi Block Adolescent Empowerment & Mother Engagement
                Program (FY 2025–2026)
              </p>
            </div>
          ) : (
            <div>
              <div className="relative h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={FINANCIAL_CHART_DATA}
                    margin={{ top: 10, right: 20, left: 10, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12, fill: "#1e3a8a" }}
                    />
                    <YAxis tick={{ fontSize: 12, fill: "#4b5563" }} />
                    <Tooltip
                      formatter={(value) => [
                        `₹ ${Number(value).toLocaleString("en-IN")}`,
                        "Amount (INR)",
                      ]}
                      contentStyle={{
                        borderRadius: "8px",
                        borderColor: "#bfdbfe",
                      }}
                    />
                    <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                      {FINANCIAL_CHART_DATA.map((entry, idx) => (
                        <Cell key={`fin-${idx}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs text-center text-gray-500 mt-2">
                Audited Financial Summary for FY 2025–2026 (1 Apr 2025 to 31 Mar
                2026) • Utilization Rate: 99.8% of Grant Received
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50/80 p-8 rounded-2xl border border-blue-100">
            <h4 className="text-xl font-bold text-blue-900 mb-4 border-b border-blue-200 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-900" />
              <span>Legal Status & Registrations</span>
            </h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>
                <strong>Registration:</strong> Society Registration Act 21,
                1860, Patna (Reg No.: 135, Date: 14.05.2004)
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>
                  <strong>Niti Aayog Unique ID:</strong> BR/2017/21709
                  (Registered: 29 Oct 2017)
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy("BR/2017/21709", "niti")}
                  className="text-xs text-blue-800 hover:text-orange-600 font-semibold flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  {copiedId === "niti" ? (
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedId === "niti" ? "Copied" : "Copy"}</span>
                </button>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>
                  <strong>PAN No:</strong> AAATL3903F
                </span>
                <button
                  type="button"
                  onClick={() => handleCopy("AAATL3903F", "pan")}
                  className="text-xs text-blue-800 hover:text-orange-600 font-semibold flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  {copiedId === "pan" ? (
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedId === "pan" ? "Copied" : "Copy"}</span>
                </button>
              </li>
              <li>
                <strong>12A Registration:</strong> AAATL3903FE20164
              </li>
              <li>
                <strong>80G Registration:</strong> AAATL3903FF20212
              </li>
              <li>
                <strong>FCRA Registered:</strong> No. 031170439 (SBI Account:
                40113343487)
              </li>
            </ul>
          </div>

          {/* Legal Status & Registrations Same to same finacial history we commnent */}

          {/* <div className="bg-orange-50/80 p-8 rounded-2xl border border-orange-100">
            <h4 className="text-xl font-bold text-orange-600 mb-4 border-b border-orange-200 pb-3 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-orange-600" />
              <span>Financial Summary (As of 31/03/2026)</span>
            </h4>
            <ul className="space-y-4 text-gray-700 text-sm md:text-base">
              <li className="flex justify-between items-center">
                <span>Opening Balance (1 Apr 2025):</span>
                <span className="font-bold">₹ 30,986.83</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Grant Received (2025–2026):</span>
                <span className="font-bold text-green-700">+ ₹ 6,50,500.00</span>
              </li>
              <li className="flex justify-between items-center border-b border-orange-200 pb-3">
                <span>Expenses (1 Apr 2025 to 31 Mar 2026):</span>
                <span className="font-bold text-red-600">- ₹ 6,49,365.00</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="font-bold text-blue-900">Closing Balance (31 Mar 2026):</span>
                <span className="font-extrabold text-blue-900 text-lg">₹ 38,984.06</span>
              </li>
            </ul>
          </div> */}

          <div className="bg-orange-50/80 p-8 rounded-2xl border border-orange-100">
            <h4 className="text-xl font-bold text-orange-600 mb-4 border-b border-orange-200 pb-3 flex items-center gap-2">
              <Landmark className="w-5 h-5 text-orange-600" />
              <span>Financial Report till 2026</span>
            </h4>
            <ul className="space-y-4 text-gray-700 text-sm md:text-base">
              <li className="flex justify-between items-center">
                <span>Activity Report for the FY-2023-2024:</span>
                <span className="font-bold">
                  {" "}
                  <a
                    href="https://drive.google.com/file/d/1uREr2gwfDGCHmBMBWhTL2AOrP4Ln8_n7/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center hover:text-orange-400 transition-colors font-medium"
                  >
                    <span>FY-2023-2024</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </span>
              </li>

              <li className="flex justify-between items-center">
                <span>Activity Report for the FY-2024-2025:</span>
                <span className="font-bold text-green-700">
                  {" "}
                  <a
                    href="https://drive.google.com/file/d/16egDPZN1CPbWi_V3zjEvuxDYEARE_Z-b/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center hover:text-orange-400 transition-colors font-medium"
                  >
                    <span>FY-2024-2025</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </span>
              </li>

              <li className="flex justify-between items-center border-b border-orange-200 pb-3">
                <span>Activity Report for the FY-2025-2026:</span>
                <span className="font-bold text-red-600">
                  {" "}
                  <a
                    href="https://drive.google.com/file/d/1-ixhwc0A7FnfGHpB0_c7c8y6J8t_ohRZ/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center hover:text-orange-400 transition-colors font-medium"
                  >
                    <span>FY-2025-2026</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
