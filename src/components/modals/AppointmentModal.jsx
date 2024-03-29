"use client";
import Modal from "./Modal";
import { CloseIcon } from "../../../public/icons";
import { useAppContext } from "@/lib/context/ContextProvider";
import dateFormatter from "@/lib/dateFormatter";
import ModalTitle from "./ModalTitle";

export default function AppointmentModal() {
    const {
        isAppointmentModalOpen,
        appointmentModalData,
        closeAppointmentModal,
    } = useAppContext();

    return (
        <Modal isOpen={isAppointmentModalOpen}>
            {appointmentModalData && (
                <>
                    <ModalTitle
                        title="Appointment Info"
                        onClick={closeAppointmentModal}
                    >
                        <CloseIcon className="h-6 stroke-primary stroke-[3px]" />
                    </ModalTitle>

                    <div className="overflow-auto max-h-[500px] grid grid-cols-[110px_1fr] gap-5 ">
                        <p className="font-medium">Appointment ID:</p>
                        <p>{appointmentModalData.appointmentId}</p>
                        <p className="font-medium">Patient:</p>
                        <p>{appointmentModalData.patient.patientName}</p>
                        <p className="font-medium">Doctor:</p>
                        <p>{appointmentModalData.doctor.doctorName}</p>
                        <p className="font-medium">Date:</p>
                        <p>{dateFormatter(appointmentModalData.date)}</p>
                        <p className="font-medium">Time:</p>
                        <p>{appointmentModalData.time}</p>
                        <p className="font-medium">Status:</p>
                        <p>{appointmentModalData.status}</p>
                        <p className="font-medium">The cost of appointment:</p>
                        <p>{appointmentModalData.cost || "-"}</p>
                        <p className="col-span-2 font-medium">Description:</p>
                        <p className="col-span-2">
                            {appointmentModalData.description}
                        </p>
                        <p className="col-span-2 font-medium">Prescription:</p>
                        <p className="col-span-2">
                            <span className="font-medium">
                                {appointmentModalData.prescription?.name || "-"}{" "}
                            </span>

                            {appointmentModalData.prescription.description ||
                                "-"}
                        </p>
                        <p className="font-medium">Duration:</p>
                        <p>
                            {appointmentModalData.prescription.duration || "-"}
                        </p>
                        <p className="col-span-2 font-medium">Conclusion:</p>
                        <p className="col-span-2">
                            {appointmentModalData.conclusion}
                        </p>
                    </div>
                </>
            )}
        </Modal>
    );
}
