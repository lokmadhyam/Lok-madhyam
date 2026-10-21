import React, { useState } from "react";
import {
  Eye,
  Target,
  Users,
  FileText,
  ArrowLeft,
  HandHeart,
  Building2,
  Copy,
  Check,
} from "lucide-react";
import {
  COMMITTEE_MEMBERS,
  STRATEGIES_LIST,
  BANK_ACCOUNTS,
} from "../data/orgData";
import { copyTextToClipboard } from "../utils/clipboard";

interface AboutUsPageProps {
  navigateTo: (page: string, sectionId?: string | null) => void;
  openActionModal: (type?: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  navigateTo,
  openActionModal,
}) => {
  const [roleFilter, setRoleFilter] = useState<"All" | "Officers" | "Members">(
    "All",
  );
  const [copiedAcct, setCopiedAcct] = useState<string | null>(null);

  const filteredMembers =
    roleFilter === "All"
      ? COMMITTEE_MEMBERS
      : COMMITTEE_MEMBERS.filter((m) =>
          roleFilter === "Officers" ? m.role !== "Member" : m.role === "Member",
        );

  const handleCopyBank = (text: string, id: string) => {
    copyTextToClipboard(text, () => {
      setCopiedAcct(id);
      setTimeout(() => setCopiedAcct(null), 2000);
    });
  };

  return (
    <div id="about" className="bg-white">
      <div className="bg-blue-900 text-white py-16 px-4 border-b-4 border-orange-500">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest bg-blue-800 text-orange-300 px-3 py-1 rounded-full">
            Organization Profile & Governance
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide mt-4 mb-4">
            About <span className="text-orange-500">Lok Madhyam</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl mx-auto">
            Registered under the Society Registration Act 21, 1860 (Reg. No.
            135, Dated 14.05.2004)
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-6xl space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold text-blue-900 uppercase">
              Who We Are
            </h2>
            <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
              <strong>LOK MADHYAM</strong> has been providing holistic
              development to socially excluded communities living under
              difficult circumstances in Bihar since 2004. With the active
              participation of our stakeholders, community members, volunteers,
              and dedicated staff, we implement grassroots programs designed to
              bring positive behavioral change and economic empowerment so every
              individual can live a better lifestyle with dignity.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Our operational footprint spans across key blocks in
              Bihar—specifically{" "}
              <strong>Masaurhi and Dhanrua in Patna district</strong> and{" "}
              <strong>Jhajha in Jamui district</strong>—supported by a
              structured monitoring hierarchy that tracks program goals and
              financial transparency according to government and donor norms.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl border-2 border-orange-100 shadow-sm space-y-3">
            <h3 className="text-xl font-bold text-orange-600 border-b border-gray-200 pb-2 flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Quick Facts</span>
            </h3>
            <p className="text-sm text-gray-700">
              <strong>Founded:</strong> May 14, 2004 (2004–05)
            </p>
            <p className="text-sm text-gray-700">
              <strong>Secretary:</strong> Pramila Kumari
            </p>
            <p className="text-sm text-gray-700">
              <strong>Registered Office:</strong> Vill. & Post Bhaiswan,
              Masaurhi, Patna - 804452
            </p>
            <p className="text-sm text-gray-700">
              <strong>Coordination Office:</strong> Vill.+P.O. Barni, P.S-
              Dhanrua, Patna - 804451
            </p>
            <p className="text-sm text-gray-700">
              <strong>Niti Aayog ID:</strong> BR/2017/21709
            </p>
            <p className="text-sm text-gray-700">
              <strong>Tax Exemption:</strong> 12A & 80G Certified, FCRA
              Registered
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl border-l-8 border-blue-900 shadow-sm">
            <h3 className="text-2xl font-bold text-blue-900 mb-3 flex items-center gap-3">
              <Eye className="w-7 h-7 text-blue-900" />
              <span>Our Vision</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Lok Madhyam dreams of equal rights for every person to live with
              dignity without any fear or discrimination—whether based on
              gender, caste, religion, region, or color. Every person in the
              world should be able to access entitlements and justice equally.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-2xl border-l-8 border-orange-500 shadow-sm">
            <h3 className="text-2xl font-bold text-orange-600 mb-3 flex items-center gap-3">
              <Target className="w-7 h-7 text-orange-600" />
              <span>Our Mission</span>
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To capacitate socially excluded women and children who are in
              difficult circumstances, and to develop an enabled, protective
              environment where women and children can grow within the community
              to access their rights and live with full dignity.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-gray-100 pb-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900">
                From the Desk of the Secretary
              </h3>
              <p className="text-orange-600 font-semibold mt-1">
                Pramila Kumari — Secretary, Lok Madhyam
              </p>
            </div>
            <span className="text-xs font-bold bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full self-start">
              Leadership Message
            </span>
          </div>
          <div className="space-y-4 text-gray-700 leading-relaxed italic md:not-italic">
            <p>
              We dream of a socially and economically educated, non-exploitative
              society free from gender discrimination. We work sincerely with
              our target groups to bring positive change in leadership,
              decision-making, planning, casting their vote, and exercising
              their constitutional rights.
            </p>
            <p>
              Through supportive hand-holding, social action, and grassroots
              suppot, we strive to establish sustainable development among
              socially excluded, marginalized communities and elected Panchayat
              women representatives who often need support to raise their
              voices. We advocate with elected women Panchayat members and build
              their capacity through training, conducting Gram Sabhas, Panchayat
              meetings, and community forums.
            </p>
            <p>
              We work closely with young girls, parents, and local village
              leaders. Together, we train and support them to stop child
              marriage, improve girls' health and hygiene, and help girls stay
              in school for higher education.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3 text-center uppercase">
            Core Strategies (2025–2026)
          </h3>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-10 rounded-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STRATEGIES_LIST.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-orange-300 transition-colors"
              >
                <span className="bg-orange-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center mr-4 mt-0.5 shrink-0 text-sm">
                  {idx + 1}
                </span>
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-blue-900 text-white p-5 flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-400" />
                <span>Present Executive Committee</span>
              </h4>
              <div className="flex gap-1 bg-blue-950 p-1 rounded-lg text-xs">
                {(["All", "Officers", "Members"] as const).map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setRoleFilter(tab)}
                    className={`px-2.5 py-1 rounded font-bold cursor-pointer transition-colors ${roleFilter === tab ? "bg-orange-600 text-white" : "text-blue-200 hover:text-white"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-blue-900 border-b border-gray-200 text-xs uppercase">
                    <th className="py-3 px-4">Sl.</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Designation</th>
                    <th className="py-3 px-4">Portfolio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-700 text-sm">
                  {filteredMembers.map((member) => (
                    <tr key={member.sl} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{member.sl}</td>
                      <td className="py-3 px-4 font-semibold text-blue-900">
                        {member.name}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`text-xs font-bold px-2.5 py-1 rounded-full ${member.role !== "Member" ? "bg-orange-100 text-orange-800" : "bg-blue-50 text-blue-800"}`}
                        >
                          {member.role}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-xs text-gray-500">
                        {member.focus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-orange-600 text-white p-5">
              <h4 className="text-xl font-bold flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>Statutory & Banking Details</span>
              </h4>
            </div>
            <div className="p-6 space-y-3 text-sm text-gray-700 flex-grow">
              <p>
                <strong>Society Registration:</strong> Act 21, 1860, Patna | No.
                135 (14.05.2004)
              </p>
              <p>
                <strong>Niti Aayog Darpan ID:</strong> BR/2017/21709
                (29.10.2017)
              </p>
              <p>
                <strong>PAN / TAN:</strong> AAATL3903F / PTNL00671G
              </p>
              <p>
                <strong>12A URN:</strong> AAATL3903FE20164 (Valid AY 2022-23 to
                2026-27)
              </p>
              <p>
                <strong>80G URN:</strong> AAATL3903FF20212 (Valid AY 2022-23 to
                2026-27)
              </p>
              <p>
                <strong>FCRA Reg. No.:</strong> 031170439 | SBI New Delhi A/C:
                40113343487 (IFSC: SBIN0000691)
              </p>
              <p>
                <strong>Local Bankers (Masaurhi):</strong> Bank of India (A/C:
                44061010002434, IFSC: BKID0004406), PNB (A/C: 273400100141759),
                Central Bank of India (A/C: 3796535267)
              </p>
              <p>
                <strong>Chartered Accountant:</strong> Raghu Nandan & Co., Post
                Office Building, Punaichak, Patna-23
              </p>

              <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-2">
                {BANK_ACCOUNTS.slice(0, 2).map((acct, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() =>
                      handleCopyBank(
                        `${acct.bank} | A/C: ${acct.accountNo} | IFSC: ${acct.ifsc}`,
                        `acct-${i}`,
                      )
                    }
                    className="text-xs bg-gray-100 hover:bg-orange-50 text-blue-900 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 border border-gray-200 cursor-pointer"
                  >
                    {copiedAcct === `acct-${i}` ? (
                      <Check className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-orange-600" />
                    )}
                    <span>
                      {copiedAcct === `acct-${i}`
                        ? "Copied Account Details!"
                        : `Copy ${acct.bank.split(",")[0]} A/C`}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <button
            type="button"
            onClick={() => navigateTo("home")}
            className="bg-blue-900 text-white px-7 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors cursor-pointer flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home Page</span>
          </button>
          <button
            type="button"
            onClick={() => openActionModal("donate")}
            className="bg-orange-600 text-white px-7 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors cursor-pointer flex items-center gap-2"
          >
            <HandHeart className="w-4 h-4" />
            <span>Support Our Mission (80G / FCRA)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
