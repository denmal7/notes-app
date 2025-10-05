import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const ConfirmModal = ({ isOpen, onClose, onConfirm, message }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                  {/* --- Background Dim Overlay --- */}
                  <motion.div 
                    className="fixed inset-0 z-40 bg-black/30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0}}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={onClose} // close when clicking outside modal
                  />

                  {/* --- Modal Content --- */}
                  <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  >
                    <div className="bg-white rounded-2xl shadow-xl w-80 p-6 relative border border-zinc-200">
                        {/* Close Button */}
                        <button
                          onClick={onClose}
                          className="absolute top-3 right-3 text-zinc-500 hover:text-zinc-300 transition"
                        >
                            <X size={18}/>
                        </button>

                        {/* Message */}
                        <p className="text-center text-zinc-700 mb-6">
                            {message || "Are you sure you want to proceed?"}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex justify-center gap-3">
                            <button
                              onClick={onClose}
                              className="px-4 py-2 rounded-lg bg-zinc-200 hover:bg-zinc-300 transition"
                            >
                                Cancel
                            </button>
                            <button
                              onClick={() => {
                                onConfirm();
                                onClose();
                              }}
                              className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                  </motion.div>
                </>
            )}
        </AnimatePresence>
    )
};

export default ConfirmModal;