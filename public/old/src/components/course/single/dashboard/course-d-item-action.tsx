'use client';
import { useState } from "react";
import { DeleteSvg, DotsTwoSvg, DraftSvg, DuplicateSvg } from "@/components/svg";
import useClickOutside from "@/hooks/use-click-outside";

export default function CourseDashboardItemAction({ courseId }: { courseId: number }) {
    const [openActionId, setOpenActionId] = useState<number | null>(null);
    const actionButtonRef = useClickOutside(setOpenActionId);

    function toggleAction(id: number) {
        if (openActionId === id) {
            setOpenActionId(null);
        } else {
            setOpenActionId(id);
        }
    }

    return (
        <div ref={actionButtonRef} className={`tpd-action-inexact-btn ${openActionId === courseId ? 'active' : ''}`}>
            <button className="click" onClick={() => toggleAction(courseId)} title="İşlemler">
                <DotsTwoSvg />
            </button>
            <div className="tpd-action-click-tooltip">
                <button type="button">
                    <span>
                        <DuplicateSvg />
                    </span>
                    Kopyala
                </button>
                <button type="button">
                    <span>
                        <DraftSvg />
                    </span>
                    Taslağa Taşı
                </button>
                <button type="button" className="text-danger">
                    <span>
                        <DeleteSvg />
                    </span>
                    Sil
                </button>
            </div>
        </div>
    )
}