import type * as data from 'elsa-health-data-fns';

/**
 * Sypmtom ids
 */
export type SymptomId = data.Symptom;
export type ConditionId = data.Condition;

export type Age = Partial<{
  years: number;
  months: number;
  days: number;
}>;

/**
 * Description of the symptom object as entered
 * in the symptoms.ts file
 */
export type SymptomDescription = {
  id: SymptomId | string;
  location: string[];
  duration: string[];
  onset: string[];
  nature: string[];
  periodicity: string[];
  aggravators: string[];
  reducers: string[];
};

export type SymptomRecord = { id: string };

export type _CompleteSymptomData = {
  /**
   * Information that is useful
   */
  location: string[];
  duration: string;
  onset: string;
  nature: string[];
  periodicity: string[];
  aggravators: string[];
  reducers: string[];
};
export type SymptomData = Partial<_CompleteSymptomData>;
export type SypmtomDataKeyType = keyof _CompleteSymptomData;

/**
 * This is the output of the fata
 */
export type Symptom = {
  Name: string;
  Location: Array<string>;
  Duration: number;
  Onset: string;
  Nature: string;
  Periodicity: string;
  Aggravators: Array<string>;
  Reducers: Array<string>;
};

export type VitalSignType = {
  temp: number; // in c
  weight: {
    value: number;
    option: 'kg' | 'lb';
  };
  height: {
    value: number;
    option: 'ft' | 'cm';
  };
};

export interface Assessment {
  /**
   * Containing the list of present symptoms
   */
  presentingSymptoms: Array<
    SymptomRecord & {
      data: SymptomData;
    }
  >;

  /**
   * Containing the list of absent symptoms
   */
  absentSymptoms: SymptomRecord[];
}

/**
 * Elsa's diagnosis
 */
export type ElsaDiagnosis = Array<{
  /**
   * Condition of the diagnosis that has
   * been created by elsa
   */
  condition: string;
  p: number;
}>;

/**
 * User's diagnosis that has been selected
 */
export type UserDiagnosis = {
  condition: string;
  label: string;
};

export interface OverallDiagnosis {
  /**
   * Diagnosis that was made by elsa
   */
  elsa: ElsaDiagnosis | undefined;
  user: UserDiagnosis[];
}

/**
 * The assessment that is dont by the user
 */
export interface AssessmentRecord {
  id: string | number;
  assessmentInfo: Assessment;
  diagnosis: OverallDiagnosis;
  dateTime: Date;
}

export type Differential = {
  p: number;
  condition: string;
  id: string;
  symptoms: Array<string>;
};
