import React, { useEffect, useState } from "react";
import OutlineBtn from "../../../components/Buttons/OutlineBtn";
import filterlines from "../../../assets/images/icons/filterlines.svg";
import MainHeading from "../../../components/MainHeading";
import Paragragh from "../../../components/Paragragh";
import SearchInput from "../../../components/SearchInput";
import plus from "../../../assets/images/icons/plus.svg";
import ReorderTable from "../../../components/ReorderTable";
import FillBtn from "../../../components/Buttons/FillBtn";
import SuccessModal from "../../../components/SuccessModal";
import InputField from "../../../components/FormFields/InputField";
import Dropdown from "../../../components/FormFields/Dropdown";
import Label from "../../../components/FormFields/Label";
import TextArea from "../../../components/FormFields/TextArea";
import Button from "../../../components/FormFields/Button";
import CancelBtn from "../../../components/FormFields/CancelBtn";
import "flowbite";
import "flowbite-datepicker";

const Stock = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [formData, setFormData] = useState({
    product: "",
    quantity: "",
    startDate: "",
    endDate: "",
    sourceWarehouse: "",
    destinationWarehouse: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      const startInput = document.getElementById("datepicker-range-start");
      const endInput = document.getElementById("datepicker-range-end");

      if (startInput && endInput) {
        import("flowbite-datepicker/DateRangePicker").then(
          ({ default: DateRangePicker }) => {
            new DateRangePicker(startInput, endInput);
          }
        );
      }
    }
  }, [isOpen]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.product) newErrors.product = "Please select a product.";
    if (!formData.quantity.trim()) newErrors.quantity = "Quantity is required.";
    if (!formData.startDate) newErrors.startDate = "Start date is required.";
    if (!formData.endDate) newErrors.endDate = "End date is required.";
    if (!formData.sourceWarehouse)
      newErrors.sourceWarehouse = "Please select a source warehouse.";
    if (!formData.destinationWarehouse)
      newErrors.destinationWarehouse = "Please select a destination warehouse.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 rounded-sm bg-white p-6">
        <div className="mb-3 flex flex-col gap-2 max-sm:flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <MainHeading heading="OrdeStock Transfers" />
            <Paragragh para="Initiate and track stock movements between warehouses." />
          </div>
          <div className="flex items-center gap-2 max-sm:flex-col">
            <SearchInput />
            <div className="flex flex-row gap-2">
              <OutlineBtn BtnName="Filters" iconSrc={filterlines} />
              <FillBtn
                BtnName="Transfer Request"
                iconSrc={plus}
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div>
          <ReorderTable />
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="bg-opacity-25 fixed inset-0 z-50 flex items-center justify-center bg-transparent p-4">
            <div className="w-full max-w-md sm:max-w-lg md:w-[724px] rounded-lg bg-white px-6 py-8 shadow-md max-h-[90vh] overflow-y-auto">
              <div className="mb-2 flex items-center justify-between pb-3">
                <MainHeading
                  heading="Initiate Transfer"
                  color="text-[#483415]"
                  fontSize="text-[20px]"
                />
              </div>

              <form className="space-y-5">
                <div>
                  <Label label="Product" />
                  <Dropdown
                    options={[
                      { value: "", label: "Select Product" },
                      { value: "product1", label: "Product 1" },
                      { value: "product2", label: "Product 2" },
                      { value: "product3", label: "Product 3" },
                    ]}
                    value={formData.product}
                    onChange={(e) => handleChange("product", e.target.value)}
                    id="product-select"
                    required
                  />
                  {errors.product && (
                    <p className="text-sm text-red-500 mt-1 bg-[#DEF7E7]">{errors.product}</p>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center">
                    <input
                      id="Pallet"
                      type="checkbox"
                      className="h-4 w-4 rounded-lg border-[#EA7D00] bg-[#F2F2FE] text-[#EA7D00] focus:ring-[#EA7D00]"
                    />
                    <Label
                      label="Pallet"
                      children={"Pallet"}
                      className="mt-2.5 ml-2"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      id="carton"
                      type="checkbox"
                      className="h-4 w-4 rounded-lg border-[#EA7D00] bg-[#F2F2FE] text-[#EA7D00] focus:ring-[#EA7D00]"
                    />
                    <Label
                      label="Cartons"
                      children={"Cartons"}
                      className="mt-2.5 ml-2"
                    />
                  </div>
                </div>

                <div>
                  <InputField
                    type="text"
                    id="quantity"
                    placeholder="e.g., 200 cartons"
                    value={formData.quantity}
                    onChange={(e) => handleChange("quantity", e.target.value)}
                    required
                  />
                  {errors.quantity && (
                    <p className="text-sm text-red-500 mt-1">{errors.quantity}</p>
                  )}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <div>
                    <Label label="Select Transfer Date" />
                    <InputField
                      type="date"
                      id="start-date"
                      value={formData.startDate}
                      onChange={(e) => handleChange("startDate", e.target.value)}
                    />
                    {errors.startDate && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.startDate}
                      </p>
                    )}
                  </div>

                  <div className="mt-5">
                    <span>to</span>
                  </div>

                  <div>
                    <Label label="Transfer time" />
                    <InputField
                      type="date"
                      id="end-date"
                      value={formData.endDate}
                      onChange={(e) => handleChange("endDate", e.target.value)}
                    />
                    {errors.endDate && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.endDate}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label label="Source Warehouse" />
                  <Dropdown
                    options={[
                      { value: "", label: "Select warehouse" },
                      { value: "wh1", label: "Warehouse 1" },
                      { value: "wh2", label: "Warehouse 2" },
                    ]}
                    value={formData.sourceWarehouse}
                    onChange={(e) =>
                      handleChange("sourceWarehouse", e.target.value)
                    }
                    id="source-warehouse-select"
                    required
                  />
                  {errors.sourceWarehouse && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.sourceWarehouse}
                    </p>
                  )}
                </div>

                <div>
                  <Label label="Destination Warehouse" />
                  <Dropdown
                    options={[
                      { value: "", label: "Select warehouse" },
                      { value: "wh1", label: "Warehouse 1" },
                      { value: "wh2", label: "Warehouse 2" },
                    ]}
                    value={formData.destinationWarehouse}
                    onChange={(e) =>
                      handleChange("destinationWarehouse", e.target.value)
                    }
                    id="destination-warehouse-select"
                    required
                  />
                  {errors.destinationWarehouse && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.destinationWarehouse}
                    </p>
                  )}
                </div>

                <div>
                  <Label label="Description" />
                  <TextArea
                    id="description"
                    placeholder="Any special instructions (e.g., temperature-controlled items)"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <CancelBtn className="bg-red-500" setIsOpen={setIsOpen}>
                    Cancel
                  </CancelBtn>

                  <Button
                    children={"Request Stock Transfer"}
                    type="button"
                    className="bg-secondary"
                    onClick={() => {
                      if (validateForm()) {
                        setIsOpen(false);
                        setShowSuccess(true);
                      }
                    }}
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
    </>
  );
};

export default Stock;
