<template>
  <div>
  <div class="form-modal form-block">
    <div class="tp-area">
      <h3 class="pull-left">Patient Information</h3>
      <router-link class="btn base-bg btn-rounded waves-effect pull-right" v-bind:to="'/'"> Patient's List
      </router-link>
    </div>
    <!--<code>-->
    <!--{{ medical_history }}-->
    <!--</code>-->
    <!--<br><br>-->
    <!--<code>-->
    <!--{{ prescriptions }}-->
    <!--</code>-->
    <!--<br><br>-->
    <!--<code>-->
    <!--{{ medical_history }}-->
    <!--</code>-->
    <div class="patiend-lists">
      <!--start single patiend-->
      <div class="row single-tab focus" data-toggle="collapse" href="#patient-1"
           aria-expanded="true" aria-controls="collapseExample">
        <div class="col-md-12 col-xs-12">
          <img class="img-circle img-thumbnail pull-left"
               src="https://via.placeholder.com/40/eee/FF425D/?text=1"/>
          <div class="patient-main">
            <h4 class="mb0"><a href="">{{ patient.name }}</a><span
              class="pull-right base-color mr15">ID: {{ patient.patient_id }}&nbsp;&nbsp;&nbsp;&nbsp;
             <router-link title="Edit Patient Information" class="pull-right" v-bind:to="'/edit-patient/'+patient.id">  <i class="fa fa-pencil-square-o"></i>
      </router-link>
            </span>
              <br/>
              <small>{{ patient.address }}</small>
            </h4>

          </div>
        </div>
        <!--<div class="col-md-2">-->
          <!--<a class="open-col"><i class="fa fa-angle-down"-->
                                 <!--aria-hidden="true"></i></a>-->
        <!--</div>-->

      </div>
      <div class="row details-info collapse in" id="patient-1">
        <div class="col-md-8 pin">Patient Name: {{ patient.name }}</div>
        <div class="col-md-2 pin"><span>Age : </span><span class="base-color">{{ patient.age }}</span></div>
        <div class="col-md-2 pin"><span class="base-color">ID : {{ patient.patient_id }}</span></div>
        <span class="clearfix"></span>

        <div class="col-md-4 pin">Blood Group: <span class="base-color">
          <span class="base-color" v-if="patient.blood_group=='2'">A+</span>
              <span class="base-color" v-if="patient.blood_group=='3'">A-</span>
              <span class="base-color" v-if="patient.blood_group=='4'">B+</span>
              <span class="base-color" v-if="patient.blood_group=='5'">B-</span>
              <span class="base-color" v-if="patient.blood_group=='6'">O+</span>
              <span class="base-color" v-if="patient.blood_group=='7'">O-</span>
              <span class="base-color" v-if="patient.blood_group=='8'">AB+</span>
              <span class="base-color" v-if="patient.blood_group=='9'">AB-</span>
              <span class="base-color" v-if="patient.blood_group=='1'">Unknown</span>
        </span></div>
        <!--<div class="col-md-3 pin"><i class="fa fa-envelope-o"></i> {{ patient.email }}</div>-->
        <div class="col-md-4 pin"><i class="fa fa-phone"></i> {{ patient.mobile }}</div>
        <div class="col-md-4 pin"><span>Gender :
          <span class="base-color" v-if="patient.gender=='1'">Male</span>
          <span span class="base-color" v-else-if="patient.gender=='2'">Female</span>
          <span span class="base-color" v-else-if="patient.gender=='3'">Other</span>

        </span>
        </div>
        <span class="clearfix"></span>
        <div class="col-md-5 pin"><span>Address : {{ patient.address }}</span></div>
        <div class="col-md-4 pin"><i class="fa fa-envelope-o"></i> {{ patient.email }}</div>
        <div class="col-md-3 pin"><span>Occupation : {{ patient.occupation }} </span></div>
        <div class="col-md-12 border-bottom mb10"></div>

        <div class="clearfix">
          <div class="singlelists_box pdb15 mb15">

            <div class="col-md-12">
              <div class="clearfix heading-u mb10 mt15">
                <h3>
                  Medical History:
                </h3>
              </div>

            </div>
            <div class="list-chk-box">


              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox"  id="diabetics" @change="updateHistory"  v-model="medical_history.diabetes" >
                    <label for="diabetics">
                      Diabetics
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="blood_pressure" @change="updateHistory" v-model="medical_history.blood_pressure" >
                    <label for="blood_pressure">
                      Blood Pressure
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="cardiac_disease" @change="updateHistory"  v-model="medical_history.cardiac_disease" >
                    <label for="cardiac_disease">
                      Cardiac Disease
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="bleeding_disorder" @change="updateHistory"  v-model="medical_history.bleeding_disorder" >
                    <label for="bleeding_disorder">
                      Bleeding Disorder
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="hepatitis" @change="updateHistory"  v-model="medical_history.hepatitis" >
                    <label for="hepatitis">
                      Hepatitis
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="jaundice" @change="updateHistory"  v-model="medical_history.jaundice" >
                    <label for="jaundice">
                      Jaundice
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="asthma" @change="updateHistory"  v-model="medical_history.asthma" >
                    <label for="asthma">
                      Asthma
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="hypersensitivity" @change="updateHistory"  v-model="medical_history.hypersensitivity" >
                    <label for="hypersensitivity">
                      Hypersensitivity
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="pregnancy" @change="updateHistory"  v-model="medical_history.pregnancy" >
                    <label for="pregnancy">
                      Pregnancy
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="rheumatic_fever" @change="updateHistory"  v-model="medical_history.rheumatic_fever" >
                    <label for="rheumatic_fever">
                      Rheumatic Fever
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-6">
                <div class="form-group">
                  <div class="checkbox checkbox-danger">
                    <input type="checkbox" id="other" @change="updateHistory"  v-model="medical_history.other" >
                    <label for="other">
                      Other
                    </label>
                  </div>

                </div>
              </div><!--end single-->
              <div class="col-md-12">
                <p>
                <span class="mt5">
                  Medical Notes:
                </span>
                  <textarea class="form-control" @change="updateHistory"  v-model="medical_history.details"></textarea>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--End single patiend-->


    </div>

  </div><br>
    <div class="form-modal form-block " id="Prescriptions" v-if="prescriptions.length > 0">
      <div class="tp-area"><h3 class="pull-left">Prescription List's</h3></div>
      <div class="patiend-lists">

        <div class="row details-info collapse in off-border" >
          <!--start single  collapse-->
          <div v-for="(prescription, index) in prescriptions">
            <div class="single-tab prescription-lists" data-toggle="collapse" :href="'#P_ID_'+prescription.id"
                 aria-expanded="false"
                 aria-controls="collapseExample">

              <div class="col-md-10">
                <img class="img-rounded img-thumbnail pull-left" :src="url + (index + 2)"/>
                <div class="patient-main">
                  <h4 class="mb0"><a href="">Prescription {{ index + 1 }} </a>
                    <br/>
                    <small>{{ prescription.date | formatDate }}</small>
                  </h4>
                </div>
              </div>
              <div class="col-md-2">
                <a class="open-col"><i class="fa fa-angle-down"
                                       aria-hidden="false"></i></a>
              </div>

            </div>
            <div class="row collapse " :id="'P_ID_'+prescription.id">

              <div class="col-md-12">
                <div class="singlelists_box pdb15">
                  <div class="col-md-12">

                    <router-link v-bind:to="'/'+patient.id+'/print/'+prescription.id"  class="pull-right btn  base-bg mt15"><i class="fa fa-print"></i> PRINT</router-link>
                    <span class="clearfix"></span>
                    <div class="table-responsive table-prescription mt15">
                      <table class="table table-bordered">
                        <thead>
                        <tr>
                          <th colspan="2">Clinical Diagonisis</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">
                                <input :id="'P_ID_C_1_'+prescription.id"  type="checkbox" v-model="prescription.gingivitis" >
                                <label :for="'P_ID_C_1_'+prescription.id">
                                  Gingivitis
                                </label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="form-group">

                              <div class="checkbox checkbox-danger">
                                <input :id="'P_ID_C_2_'+prescription.id" type="checkbox"
                                       v-model="prescription.periodontitis" >
                                <label :for="'P_ID_C_2_'+prescription.id">
                                  Periodontitis
                                </label>
                              </div>

                            </div>
                          </td>

                        </tr>

                        <tr>
                          <td>
                            <div class="form-group">

                              <div class="checkbox checkbox-danger">
                                <input :id="'P_ID_C_3_'+prescription.id"  type="checkbox" v-model="prescription.p_pockets"
                                       >
                                <label :for="'P_ID_C_3_'+prescription.id">
                                  p pockets
                                </label>
                              </div>

                            </div>
                          </td>
                          <td>
                            <div class="form-group">

                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_4_'+prescription.id"  type="checkbox" v-model="prescription.caries"
                                       >
                                <label :for="'P_ID_C_4_'+prescription.id">
                                  caries
                                </label>
                              </div>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="form-group">

                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_5_'+prescription.id"  type="checkbox" v-model="prescription.pulpitis"
                                       >
                                <label :for="'P_ID_C_5_'+prescription.id">
                                  pulpitis
                                </label>
                              </div>

                            </div>
                          </td>
                          <td>
                            <div class="form-group">

                              <div class="checkbox checkbox-danger">
                                <input :id="'P_ID_C_6_'+prescription.id"  type="checkbox" v-model="prescription.g_caries"
                                       >
                                <label :for="'P_ID_C_6_'+prescription.id">
                                  G caries
                                </label>
                              </div>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="form-group">

                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_7_'+prescription.id"  type="checkbox" v-model="prescription.dead_tooth"
                                       >
                                <label :for="'P_ID_C_7_'+prescription.id">
                                  Dead Tooth
                                </label>
                              </div>

                            </div>
                          </td>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_8_'+prescription.id" type="checkbox"
                                       v-model="prescription.bdr_bdc_loose" >
                                <label :for="'P_ID_C_8_'+prescription.id">
                                  Bdr Bdc Loose
                                </label>
                              </div>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_9_'+prescription.id" type="checkbox"
                                       v-model="prescription.att_adr_ero_sensitivity" >
                                <label :for="'P_ID_C_9_'+prescription.id">
                                  Att adr ero sensitivity
                                </label>
                              </div>

                            </div>
                          </td>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_10_'+prescription.id" type="checkbox"
                                       v-model="prescription.r_deciduous" >
                                <label :for="'P_ID_C_10_'+prescription.id">
                                  R Deciduous
                                </label>
                              </div>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_11_'+prescription.id" type="checkbox"
                                       v-model="prescription.impacted_tooth_pericor_apical_infection" >
                                <label :for="'P_ID_C_11_'+prescription.id">
                                  Impacted Tooth Pericor Apical Infection
                                </label>
                              </div>

                            </div>
                          </td>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_12_'+prescription.id" type="checkbox"
                                       v-model="prescription.abscess_granuloma_cyst_tumour" >
                                <label :for="'P_ID_C_12_'+prescription.id">
                                  Abscess Granuloma Cyst Tumour
                                </label>
                              </div>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_13_'+prescription.id" type="checkbox"
                                       v-model="prescription.fracture_traumatic" >
                                <label :for="'P_ID_C_13_'+prescription.id">
                                  Fracture Traumatic
                                </label>
                              </div>

                            </div>
                          </td>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_14_'+prescription.id" type="checkbox"
                                       v-model="prescription.extracted_teeth_miss_tooth_anodonsia" >
                                <label :for="'P_ID_C_14_'+prescription.id">
                                  Extracted Teeth Miss Tooth Anodonsia
                                </label>
                              </div>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_15_'+prescription.id" type="checkbox"
                                       v-model="prescription.ulceration_laceration_cheek" >
                                <label :for="'P_ID_C_15_'+prescription.id">
                                  Ulceration Laceration Cheek
                                </label>
                              </div>

                            </div>
                          </td>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">

                                <input :id="'P_ID_C_16_'+prescription.id" type="checkbox" v-model="prescription.frenum"
                                       >
                                <label :for="'P_ID_C_16_'+prescription.id">
                                  Frenum
                                </label>
                              </div>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">
                                <input :id="'P_ID_C_17_'+prescription.id" type="checkbox" v-model="prescription.tm_joint"
                                       >
                                <label :for="'P_ID_C_17_'+prescription.id">
                                  TM Joint
                                </label>
                              </div>

                            </div>
                          </td>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">
                                <input :id="'P_ID_C_18_'+prescription.id" type="checkbox"
                                       v-model="prescription.malocclusion_spacing_crowding" >
                                <label :for="'P_ID_C_18_'+prescription.id">
                                  Malocclusion Spacing Crowding
                                </label>
                              </div>

                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <div class="form-group">
                              <div class="checkbox checkbox-danger">
                                <input :id="'P_ID_C_19_'+prescription.id" type="checkbox" v-model="prescription.x_ray"
                                       >
                                <label :for="'P_ID_C_19_'+prescription.id">
                                  X-ray
                                </label>
                              </div>

                            </div>
                          </td>

                        </tr>
                        <tr>
                          <td colspan="2" class="text-uppercase">Treatment Plan/Advice</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                        <textarea class="form-control" v-model="prescription.treatment_plan_advice" ></textarea>

                          </td>
                        </tr>
                        <tr>
                          <td colspan="2" class="text-uppercase">Treatment Performed</td>
                        </tr>
                        <tr>
                          <td colspan="2">
                            <textarea class="form-control" v-model="prescription.treatment_performed" ></textarea>

                          </td>
                        </tr>
                        </tbody>

                      </table>

                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="table-responsive table-prescription mt15">
                      <table class="table table-bordered">
                        <thead>
                        <tr>
                          <th>Remarks</th>

                          <th colspan="2">Bill Information</th>
                        </tr>
                        </thead>
                        <tbody>

                        <tr>
                          <td rowspan="4">
                            <textarea class="form-control" rows="5" v-model="prescription.remarks"  ></textarea>

                          </td>

                          <td colspan="2">
                            Next Appointment Date
                            <!--<datepicker-->
                            <!--:v-model="prescription.next_schedule_date"-->
                            <!--:value="prescription.next_schedule_date"-->
                            <!--v-on:dateChanged="updateSinglePrescription(index)"/>-->
                            <!--<input type="date"  style="width: 230px" class="form-control date" @change="updateSinglePrescription(index)" name="next_schedule_date"-->
                                                      <!--v-model="prescription.next_schedule_date">-->
                            <!--<datepicker  v-model="prescription.next_schedule_date"  :value="prescription.next_schedule_date" name="next_schedule_date"  @change="updateSinglePrescription(index)"  ></datepicker>-->

                              <input type="text" data-provide="datepicker"  data-date-format="yyyy-mm-dd" class="form-control next_schedule"  v-model="prescription.next_schedule_date"  />


                             </td>
                          </tr>
                        <tr>
                          <td class="text-right width110">Total Bill</td>
                          <td class="width110"><input type="text" class="form-control width110 total_bill"
                                                      v-model="prescription.total_bill" @change="updatePrescriptionBill(index)"  ></td>

                        </tr>
                        <tr>

                          <td class="text-right width110">Paid Amount</td>
                          <td class="width110"><input type="text" class="form-control width110 payment"
                                                      v-model="prescription.payment" @change="updatePrescriptionBill(index)" ></td>
                        </tr>
                        <tr>

                          <td class="text-right width110">Due Amount</td>
                          <td class="width110"><input type="text" class="form-control width110 due"
                                                      v-model="prescription.due" readonly ></td>
                        </tr>
                        <tr>
                          <td colspan="3">
                            <button type="button" class="btn base-bg pull-right" @click="updateSinglePrescription(index)" >
                              Update  Prescription
                            </button>
                          </td>
                        </tr>
                        </tbody>

                      </table>

                    </div>


                  </div>
                </div>
              </div>

            </div>
          </div>
          <!--end single  collapse-->

        </div>
        <!--End single patiend-->


      </div>

    </div><br>
    <div class="form-modal form-block ">
      <div class="tp-area"><h3 class="pull-left">New Prescription</h3></div>
      <div class="patiend-lists">
        <div class="row details-info collapse in off-border" >
          <!--create  prescription collapse-->
          <div class="single-tab prescription-lists" data-toggle="collapse" href="#p_col_02" aria-expanded="true"
               aria-controls="collapseExample">
            <div class="col-md-10">
              <img class="img-rounded img-thumbnail pull-left"
                   src="https://via.placeholder.com/30/eee/FF425D/?text=1"/>
              <div class="patient-main">
                <h4 class="mb0"><a href="">New Prescription </a>
                  <br/>
                  <small>{{ todayDate | formatDate  }}</small>
                </h4>
              </div>
            </div>
            <div class="col-md-2">
              <a class="open-col"><i class="fa fa-angle-down"
                                     aria-hidden="false"></i></a>
            </div>

          </div>
          <div class="row collapse  in" id="p_col_02">
            <div class="col-md-12">
              <div class="singlelists_box pdb15">
                <div class="col-md-12">
                  <div class="table-responsive table-prescription mt15">
                    <table class="table table-bordered">
                      <thead>
                      <tr>
                        <th colspan="2">Clinical Diagonisis</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>

                        <td>
                          <div class="form-group">

                            <div class="checkbox checkbox-danger">
                              <input id="c-1" type="checkbox" v-model="new_prescription_form_data.gingivitis">
                              <label for="c-1">
                                Gingivitis
                              </label>
                            </div>

                          </div>

                        </td>
                        <td>
                          <div class="form-group">

                            <div class="checkbox checkbox-danger">
                              <input id="c-2" type="checkbox" v-model="new_prescription_form_data.periodontitis">
                              <label for="c-2">
                                Periodontitis
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="form-group">

                            <div class="checkbox checkbox-danger">
                              <input id="c-3" type="checkbox" v-model="new_prescription_form_data.p_pockets">
                              <label for="c-3">
                                p pockets
                              </label>
                            </div>

                          </div>
                        </td>
                        <td>
                          <div class="form-group">

                            <div class="checkbox checkbox-danger">
                              <input id="c-4" type="checkbox" v-model="new_prescription_form_data.caries">
                              <label for="c-4">
                                caries
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="form-group">

                            <div class="checkbox checkbox-danger">
                              <input id="c-5" type="checkbox" v-model="new_prescription_form_data.pulpitis">
                              <label for="c-5">
                                pulpitis
                              </label>
                            </div>

                          </div>
                        </td>
                        <td>
                          <div class="form-group">

                            <div class="checkbox checkbox-danger">
                              <input id="c-6" type="checkbox" v-model="new_prescription_form_data.g_caries">
                              <label for="c-6">
                                G caries
                              </label>
                            </div>

                          </div>
                        </td>

                      </tr>

                      <tr>
                        <td>
                          <div class="form-group">

                            <div class="checkbox checkbox-danger">
                              <input id="c-7" type="checkbox" v-model="new_prescription_form_data.dead_tooth">
                              <label for="c-7">
                                Dead Tooth
                              </label>
                            </div>

                          </div>
                        </td>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-8" type="checkbox" v-model="new_prescription_form_data.bdr_bdc_loose">
                              <label for="c-8">
                                Bdr Bdc Loose
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-9" type="checkbox" v-model="new_prescription_form_data.att_adr_ero_sensitivity">
                              <label for="c-9">
                                Att adr ero sensitivity
                              </label>
                            </div>

                          </div>
                        </td>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-10" type="checkbox" v-model="new_prescription_form_data.r_deciduous">
                              <label for="c-10">
                                R Deciduous
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-11" type="checkbox"
                                     v-model="new_prescription_form_data.impacted_tooth_pericor_apical_infection">
                              <label for="c-11">
                                Impacted Tooth Pericor Apical Infection
                              </label>
                            </div>

                          </div>
                        </td>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-12" type="checkbox"
                                     v-model="new_prescription_form_data.abscess_granuloma_cyst_tumour">
                              <label for="c-12">
                                Abscess Granuloma Cyst Tumour
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-13" type="checkbox" v-model="new_prescription_form_data.fracture_traumatic">
                              <label for="c-13">
                                Fracture Traumatic
                              </label>
                            </div>

                          </div>
                        </td>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-14" type="checkbox"
                                     v-model="new_prescription_form_data.extracted_teeth_miss_tooth_anodonsia">
                              <label for="c-14">
                                Extracted Teeth Miss Tooth Anodonsia
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-15" type="checkbox"
                                     v-model="new_prescription_form_data.ulceration_laceration_cheek">
                              <label for="c-15">
                                Ulceration Laceration Cheek
                              </label>
                            </div>

                          </div>
                        </td>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-16" type="checkbox" v-model="new_prescription_form_data.frenum">
                              <label for="c-16">
                                Frenum
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-17" type="checkbox" v-model="new_prescription_form_data.tm_joint">
                              <label for="c-17">
                                TM Joint
                              </label>
                            </div>

                          </div>
                        </td>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-18" type="checkbox"
                                     v-model="new_prescription_form_data.malocclusion_spacing_crowding">
                              <label for="c-18">
                                Malocclusion Spacing Crowding
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="form-group">
                            <div class="checkbox checkbox-danger">
                              <input id="c-19" type="checkbox" v-model="new_prescription_form_data.x_ray">
                              <label for="c-19">
                                X-ray
                              </label>
                            </div>

                          </div>
                        </td>

                      </tr>
                      <tr>
                        <td colspan="2" class="text-uppercase">Treatment Plan/Advice</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                             <textarea class="form-control" rows="4"
                                       v-model="new_prescription_form_data.treatment_plan_advice">
                             </textarea>

                        </td>
                      </tr>
                      <tr>
                        <td colspan="2" class="text-uppercase">Treatment Performed</td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <textarea class="form-control" v-model="new_prescription_form_data.treatment_performed"></textarea>

                        </td>
                      </tr>
                      </tbody>

                    </table>


                  </div>
                </div>
                <div class="col-md-12">

                  <div class="table-responsive table-prescription mt15">

                    <table class="table table-bordered">
                      <thead>
                      <tr>
                        <th>Remarks</th>

                        <th colspan="2">Bill Information</th>
                      </tr>
                      </thead>
                      <tbody>

                      <tr>
                        <td rowspan="4">
                         <textarea class="form-control" rows="5" v-model="new_prescription_form_data.remarks">

                                                                 </textarea>

                        </td>

                        <td  colspan="2">
                          Next Appointment Date
                          <!--<input type="text" class="form-control width110" name="next_schedule_date" placeholder="YY-MM-D"-->
                                                    <!--v-model="new_prescription_form_data.next_schedule_date">-->
                         <datepicker placeholder="Select date" name="next_schedule_date" id="next_schedule_date" v-model="new_prescription_form_data.next_schedule_date"></datepicker>
                        </td>

                      </tr>
                      <tr>
                        <td class="text-right width110">Total Bill</td>
                        <td class="width110"><input type="text" class="form-control width110" name="total_bill"  @keyup="updateBill"
                                                    v-model="new_prescription_form_data.total_bill" required></td>
                      </tr>
                      <tr>

                        <td class="text-right width110">Paid Amount</td>
                        <td class="width110"><input type="text" class="form-control width110" name="payment" @keyup="updateBill"
                                                    v-model="new_prescription_form_data.payment" required></td>
                      </tr>
                      <tr>

                        <td class="text-right width110">Due Amount</td>
                        <td class="width110"><input type="text" class="form-control width110"
                                                    v-model="new_prescription_form_data.due" name="due"   readonly></td>
                      </tr>
                      </tbody>

                    </table>

                  </div>

                  <div>

                    <button type="button" class="btn base-bg" @click="createPrescription()">
                      Save Prescription
                    </button>
                  </div>


                </div>
              </div>
            </div>
          </div>
          <!--end prescription  collapse-->
        </div>
        <!--End single patiend-->


      </div>

    </div>


  </div>
</template>
<script>
  const $ = require('jquery');
  window.$ = $;
  //click a date and  catch  the date
  $(function() {
    // $('.changedate').click(function() {
    //    alert();
    //   //$('#appointmentModal').addClass('show');
    // });
  });
  //import  jquery and call datepciker
  import axios from 'axios';
  import datepicker from 'vue-date-picker';
  import moment from 'moment';
  export default {
    components: {
      datepicker
    },
    data() {
      return {
        url: "https://via.placeholder.com/30/eee/FF425D/?text=",
        todayDate: new Date(),
        patient: {},
        medical_history: {},
        prescriptions: [],
        new_prescription_form_data: {
          "gingivitis": false,
          "periodontitis": false,
          "p_pockets": false,
          "caries": false,
          "pulpitis": false,
          "g_caries": false,
          "dead_tooth": false,
          "bdr_bdc_loose": false,
          "att_adr_ero_sensitivity": false,
          "r_deciduous": false,
          "impacted_tooth_pericor_apical_infection": false,
          "abscess_granuloma_cyst_tumour": false,
          "fracture_traumatic": false,
          "extracted_teeth_miss_tooth_anodonsia": false,
          "ulceration_laceration_cheek": false,
          "frenum": false,
          "tm_joint": false,
          "malocclusion_spacing_crowding": false,
          "x_ray": false,
          "treatment_plan_advice": "",
          "treatment_performed": "",
          "total_bill": 0,
          "payment": 0,
          "due": 0,
          "remarks": "",
          "dental_surgeon": '',
          "next_schedule_date": ''
        }
      };

    },
    mounted: function () {
      this.loadApiData();
      //let dental_surgeon_id = localStorage.getItem("doctor_id");
      //console.log("IDDDDD:" + dental_surgeon_id);
    },
    methods: {
      updateBill: function() {
        this.new_prescription_form_data.due = this.new_prescription_form_data.total_bill - this.new_prescription_form_data.payment;
      },
      loadApiData: function () {
        //get  id  through route
        this.user_id = this.$route.params.id;
        //this.patients = "Loading....";
        var vm = this;
        //start loading
        vm.$parent.startLoading();
        axios.get('https://d-care.herokuapp.com/patients/' + this.user_id + '/', {headers: {"Authorization": localStorage.getItem("token")}})
          .then(function (response) {
            console.log(response);
            vm.medical_history = response.data["medical_history"];
            vm.prescriptions = response.data["prescriptions"];
            vm.medical_history = response.data["medical_history"];
            delete response.data["medical_history"];
            delete response.data["prescriptions"];
            vm.patient = response.data;
            //end loading
            vm.$parent.endLoading();
          })
          .catch(function (error) {
            //end loading
            vm.$parent.endLoading();
            if (error.response.status === 401) {
              localStorage.removeItem("token");
              vm.$router.push('/login')
            }
          });
      },
      createPrescription: function () {
        let vm = this;
        //start loading
        vm.$parent.startLoading();
        //console.log(vm.new_prescription_form_data);
        //get doctor  id  from  local storage
        let dental_surgeon_id = localStorage.getItem("doctor_id");
        //console.log("IDDDDD:" + dental_surgeon_id);
        vm.new_prescription_form_data.dental_surgeon = dental_surgeon_id;
        //alert($('#next_schedule_date input').val());
        vm.new_prescription_form_data.next_schedule_date= $('#next_schedule_date input').val();
       if(vm.new_prescription_form_data.total_bill >0){
        axios.post('https://d-care.herokuapp.com/patients/' + this.user_id + '/prescriptions/', this.new_prescription_form_data, {headers: {"Authorization" : localStorage.getItem("token")}})
          .then(function (response) {
            console.log(response);
            vm.prescriptions.push(response.data);
            vm.$toasted.show('Successfully  added A  new Prescription.',
              {
                type: 'success',
                icon: 'check',
                //duration : 10000
              });
            console.log(response.data);
            //end loading
            vm.$parent.endLoading();
            //reload  this  page
              vm.$router.go();
            //this.$router.go(this.$router.currentRoute);
          })
          .catch(function (error) {
            //end loading
            vm.$parent.endLoading();
            vm.$toasted.show('Something  wrong  Try again', {type: 'error', icon: 'fa-exclamation-triangle'});
            console.log(error.response);
            // remove token if status is 401
            if (error.response.status === 401) {
              localStorage.removeItem("token");
              vm.$router.push('/login')
            }
          });
       }else{
         //end loading
         vm.$parent.endLoading();
         vm.$toasted.show('Please check Bill Information, Total Bill  need  to be  greter than 0', {type: 'error', icon: 'fa-exclamation-triangle'});
       }
      },
      updateHistory: function () {
        let vm = this;
        //start loading
        //vm.$parent.startLoading();
        axios.patch('https://d-care.herokuapp.com/patients/' + this.user_id + '/medical_history/', this.medical_history, {headers: {"Authorization" : localStorage.getItem("token")}})
          .then(function (response) {
            console.log(response);
           vm.medical_history = response.data;
            // vm.$toasted.show('Medical History Updated Successfully.',
            //   {
            //     type: 'success',
            //     icon: 'check',
            //     duration : 1000
            //   });
            console.log(response.data);
            //end loading
            //vm.$parent.endLoading();
          })
          .catch(function (error) {
            //end loading
            //vm.$parent.endLoading();
            vm.$toasted.show('Something  wrong  Try again', {type: 'error', icon: 'fa-exclamation-triangle'});
            console.log(error.response);
            // remove token if status is 401
            if (error.response.status === 401) {
              localStorage.removeItem("token");
              vm.$router.push('/login')
            }
          });
      },
      updatePrescriptionBill: function(index) {
        let singlePrescriptionData = this.prescriptions[index];
        console.log(singlePrescriptionData);
        let prescriptionID = singlePrescriptionData.id;
        // let next_schedule_date=  moment(singlePrescriptionData.next_schedule_date).format('YYYY-M-D');
        // singlePrescriptionData.next_schedule_date=next_schedule_date;
        //calculate due amount
        let due = _.subtract(singlePrescriptionData.total_bill, singlePrescriptionData.payment);
        //add  due  amount  in  json data
        singlePrescriptionData.due=due;
        //console.log(singlePrescriptionData);
        $('#P_ID_'+prescriptionID+' .due').val(due);
      },
      updateSinglePrescription: function (index) {
        //alert();
        let  vm = this;
        let singlePrescriptionData = this.prescriptions[index];
        let prescriptionID = singlePrescriptionData.id;
        // let next_schedule_date=  moment(singlePrescriptionData.next_schedule_date).format('YYYY-M-D');
        // singlePrescriptionData.next_schedule_date=next_schedule_date;
        //calculate due amount
        let due = _.subtract(singlePrescriptionData.total_bill, singlePrescriptionData.payment);
        //add  due  amount  in  json data
        singlePrescriptionData.due=due;
        singlePrescriptionData.next_schedule_date= $('#P_ID_'+prescriptionID+' .next_schedule').val();
        //console.log(singlePrescriptionData);
        $('#P_ID_'+prescriptionID+' .due').val(due);
        // $('#P_ID_'+prescriptionID+' .date').val(next_schedule_date);
        //console.log('https://d-care.herokuapp.com/patients/' + this.user_id + '/prescriptions/'+prescriptionID+'/');
        axios.patch('https://d-care.herokuapp.com/patients/' + this.user_id + '/prescriptions/'+prescriptionID+'/',singlePrescriptionData, {headers: {"Authorization" : localStorage.getItem("token")}})
          .then(function (response) {
            vm.$toasted.show('Prescription Updated Successfully.',
              {
                type: 'success',
                icon: 'check',
                duration : 1000
              });
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
            vm.$toasted.show('Something  wrong Try again', {type: 'error', icon: 'fa-exclamation-triangle'});
            console.log(error.response);
          });
      }

    }
  };
</script>
