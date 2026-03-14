"use client";

import { useState } from 'react';
import { IndianRupee } from 'lucide-react';

export default function EMICalculator({ basePrice = 8500000 }: { basePrice?: number }) {
    const [loanAmount, setLoanAmount] = useState(basePrice * 0.8); // 80% default loan
    const [interestRate, setInterestRate] = useState(8.5); // Default 8.5%
    const [loanTenure, setLoanTenure] = useState(20); // Default 20 years
    // EMI Calculation Formula: P x R x (1+R)^N / [(1+R)^N-1]
    const p = loanAmount;
    const r = interestRate / 12 / 100; // Monthly interest rate
    const n = loanTenure * 12; // Tenure in months

    let emi = 0;
    if (p > 0 && r > 0 && n > 0) {
        const calculatedEmi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        emi = Math.round(calculatedEmi);
    }

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(value);
    };

    const emiSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Shapoorji Pallonji Smart EMI Intelligence Tool",
        "operatingSystem": "Web-Based",
        "applicationCategory": "FinanceApplication",
        "description": "Advanced mortgage and EMI estimation model for Shapoorji Pallonji Joyville projects in Pune. Features real-time principal and interest breakdown.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "INR"
        }
    };

    return (
        <div className="bg-[#FFFFFF] border border-[#C5A059]/40 shadow-xl p-8 rounded-sm">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emiSchema) }} />
            <div className="flex items-center gap-4 mb-8 border-b border-[#C5A059]/20 pb-4">
                <IndianRupee className="text-[#1D4F9C]" size={28} strokeWidth={1.5} />
                <div>
                    <h3 className="text-2xl font-serif text-[#1A1A1A]">Smart EMI Calculator</h3>
                    <p className="text-sm text-[#1A1A1A] mt-1">Estimate your monthly commitment</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Sliders Section */}
                <div className="space-y-8">
                    {/* Loan Amount */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-[#1A1A1A] tracking-wide uppercase">Loan Amount</label>
                            <span className="text-[#1D4F9C] font-semibold">{formatCurrency(loanAmount)}</span>
                        </div>
                        <input
                            type="range"
                            min="1000000"
                            max="50000000"
                            step="100000"
                            value={loanAmount}
                            onChange={(e) => setLoanAmount(Number(e.target.value))}
                            className="w-full h-1 bg-[#EEF2F6] rounded-lg appearance-none cursor-pointer accent-[#1D4F9C]"
                        />
                        <div className="flex justify-between mt-2 text-xs text-[#1A1A1A]/70">
                            <span>{formatCurrency(1000000)}</span>
                            <span>{formatCurrency(50000000)}</span>
                        </div>
                    </div>

                    {/* Interest Rate */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-[#1A1A1A] tracking-wide uppercase">Interest Rate (%)</label>
                            <span className="text-[#1D4F9C] font-semibold">{interestRate}%</span>
                        </div>
                        <input
                            type="range"
                            min="6"
                            max="15"
                            step="0.1"
                            value={interestRate}
                            onChange={(e) => setInterestRate(Number(e.target.value))}
                            className="w-full h-1 bg-[#EEF2F6] rounded-lg appearance-none cursor-pointer accent-[#1D4F9C]"
                        />
                        <div className="flex justify-between mt-2 text-xs text-[#1A1A1A]/70">
                            <span>6%</span>
                            <span>15%</span>
                        </div>
                    </div>

                    {/* Loan Tenure */}
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-sm font-medium text-[#1A1A1A] tracking-wide uppercase">Loan Tenure (Years)</label>
                            <span className="text-[#1D4F9C] font-semibold">{loanTenure} Years</span>
                        </div>
                        <input
                            type="range"
                            min="5"
                            max="30"
                            step="1"
                            value={loanTenure}
                            onChange={(e) => setLoanTenure(Number(e.target.value))}
                            className="w-full h-1 bg-[#EEF2F6] rounded-lg appearance-none cursor-pointer accent-[#1D4F9C]"
                        />
                        <div className="flex justify-between mt-2 text-xs text-[#1A1A1A]/70">
                            <span>5 Yrs</span>
                            <span>30 Yrs</span>
                        </div>
                    </div>
                </div>

                {/* Output Presentation Section */}
                <div className="bg-[#EEF2F6] border border-[#C5A059]/20 p-8 rounded-sm flex flex-col justify-center items-center text-center">
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#1A1A1A] mb-4">Estimated Monthly EMI</p>
                    <div className="text-5xl font-serif text-[#1D4F9C] mb-6 drop-shadow-sm">
                        {formatCurrency(emi)}
                    </div>

                    <div className="w-full space-y-3 border-t border-[#C5A059]/20 pt-6 mt-2">
                        <div className="flex justify-between text-sm">
                            <span className="text-[#1A1A1A]">Principal Amount</span>
                            <span className="font-semibold text-[#1A1A1A]">{formatCurrency(loanAmount)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-[#1A1A1A]">Total Interest Payable</span>
                            <span className="font-semibold text-[#1A1A1A]">{formatCurrency((emi * loanTenure * 12) - loanAmount)}</span>
                        </div>
                        <div className="flex justify-between text-sm pt-3 border-t border-[#C5A059]/10">
                            <span className="font-medium text-[#1A1A1A]">Total Payment (Prin + Int)</span>
                            <span className="font-bold text-[#1D4F9C]">{formatCurrency(emi * loanTenure * 12)}</span>
                        </div>
                    </div>

                    <p className="text-[10px] text-[#1A1A1A]/60 mt-6 italic bg-[#FFFFFF]/50 px-3 py-1 rounded">
                        *Indicative calculation. Actual rates and figures may vary by bank and applicant profile.
                    </p>
                </div>
            </div>
        </div>
    );
}
