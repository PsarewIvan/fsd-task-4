// Слой для обновления модели и отображения, который
// реагирует на сообщения о действиях пользователей и обновляет модель,
// реагирует на сообщения об обновлении модели и обновляет отображение
import Model from './Model';
import View from './view/View';
import { Settings, PublicHandler } from '../types';

class SliderPresenter {
  private model: Model;
  private view: View;
  private element: HTMLElement;

  constructor(element: HTMLElement, options: Partial<Settings>) {
    this.element = element;
    this.model = new Model(options);
    const settings = this.model.getSettings();
    this.view = new View(this.element, settings);
    this.viewHandler(settings);
    this.model.modelChangedSubject.subscribe(
      'viewUpdate',
      this.handleViewUpdate.bind(this)
    );
    this.model.modelChangedSubject.subscribe(
      'rebuildView',
      this.handleViewRebuild.bind(this)
    );
  }

  // Подписываемся на изменения положения ползунков во View
  // и передаем изменения в Model для записи новых значений
  private viewHandler(options: Partial<Settings>): void {
    this.view.viewChange(
      (thumbPercentOffset: number, index: number) => {
        this.model.setNewValue(thumbPercentOffset, index);
      },
      () => {
        if (options.onFinish) {
          options.onFinish(this.model.getSettings().values);
        }
      }
    );
  }

  // Слушатель изменения значений в модели. При изменении значений
  // вызывает метод обновления View
  private handleViewUpdate(settings: Settings): void {
    this.view.update(settings);
  }

  // Слушатель за изменением ориентации  и тпа слайдера. При изменении
  // переписывает и перерисовывает вид слайдера
  private handleViewRebuild(): void {
    this.view.destroyAll();
    const settings = this.model.getSettings();
    this.view = new View(this.element, settings);
    this.viewHandler(settings);
  }

  // Публичные методы взаимодействия со слайдером
  public onChange(handler: PublicHandler) {
    this.model.modelChangedSubject.subscribe('onChange', (state: Settings) => {
      if (handler) {
        handler(state);
      }
    });
  }

  public onLoad(handler: PublicHandler) {
    if (handler) {
      handler(this.model.getSettings());
    }
  }

  public getState(): Settings {
    return this.model.getSettings();
  }

  public update(state: Partial<Settings>): void {
    this.model.updateModel(state);
  }
}

export default SliderPresenter;
