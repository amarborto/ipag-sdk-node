const AntifraudSettings = require('../../src/model/antifraudSettings');

describe('AntifraudSettings', () => {
    it('should create an antifraud settings object with the constructor successfully', () => {
        const antifraudSettings = new AntifraudSettings({
            enabled: true,
            environment: 'test',
            consult_mode: 'auto',
            capture_on_approval: false,
            cancel_on_refused: true,
            review_score_threshold: 0.8
        });

        expect(antifraudSettings.enabled).toBe(true);
        expect(antifraudSettings.environment).toBe('test');
        expect(antifraudSettings.consult_mode).toBe('auto');
        expect(antifraudSettings.capture_on_approval).toBe(false);
        expect(antifraudSettings.cancel_on_refused).toBe(true);
        expect(antifraudSettings.review_score_threshold).toBe(0.8);
    });

    it('should create an antifraud settings object and set the values successfully', () => {
        const antifraudSettings = new AntifraudSettings();
        antifraudSettings.enabled = true;
        antifraudSettings.environment = 'test';
        antifraudSettings.consult_mode = 'auto';
        antifraudSettings.capture_on_approval = false;
        antifraudSettings.cancel_on_refused = true;
        antifraudSettings.review_score_threshold = 0.8;

        expect(antifraudSettings.enabled).toBe(true);
        expect(antifraudSettings.environment).toBe('test');
        expect(antifraudSettings.consult_mode).toBe('auto');
        expect(antifraudSettings.capture_on_approval).toBe(false);
        expect(antifraudSettings.cancel_on_refused).toBe(true);
        expect(antifraudSettings.review_score_threshold).toBe(0.8);
    });

    it('should create an empty antifraud settings object successfully', () => {
        const antifraudSettings = new AntifraudSettings();

        expect(antifraudSettings.enabled).toBeUndefined();
        expect(antifraudSettings.environment).toBeUndefined();
        expect(antifraudSettings.consult_mode).toBeUndefined();
        expect(antifraudSettings.capture_on_approval).toBeUndefined();
        expect(antifraudSettings.cancel_on_refused).toBeUndefined();
        expect(antifraudSettings.review_score_threshold).toBeUndefined();
    });

    it('should create and set empty properties for an antifraud settings object successfully', () => {
        const antifraudSettings = new AntifraudSettings({
            enabled: true,
            environment: 'test',
            consult_mode: 'auto',
            capture_on_approval: false,
            cancel_on_refused: true,
            review_score_threshold: 0.8
        });

        antifraudSettings.enabled = null;
        antifraudSettings.environment = null;
        antifraudSettings.consult_mode = null;
        antifraudSettings.capture_on_approval = null;
        antifraudSettings.cancel_on_refused = null;
        antifraudSettings.review_score_threshold = null;

        expect(antifraudSettings.enabled).toBeNull();
        expect(antifraudSettings.environment).toBeNull();
        expect(antifraudSettings.consult_mode).toBeNull();
        expect(antifraudSettings.capture_on_approval).toBeNull();
        expect(antifraudSettings.cancel_on_refused).toBeNull();
        expect(antifraudSettings.review_score_threshold).toBeNull();
    });
});
